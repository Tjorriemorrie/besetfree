from datetime import datetime
from os import getenv

from fabric import Connection
from invoke import task, run, Responder

host = '165.22.202.78'
user = 'free'
dir = '/home/free/besetfree'
pwd = getenv('FREE_PWD')
_conn = None

if not pwd:
    raise ValueError('Missing FREE_PWD')


@task
def name(c):
    conn = get_conn()
    conn.run('uname -a', echo=True)


def get_conn() -> Connection:
    global _conn
    if not _conn:
        print('getting connection...')
        _conn = Connection(
            host, user=user,
            connect_kwargs={
                'password': pwd, 'look_for_keys': False,  'allow_agent': False})
    return _conn


# @task
# def retrieve_data(ctx):
#     print('Retrieving db and model')
#     conn = get_conn()
#
#     print('zipping files...')
#     zip_file = 'data.tar.gz'
#     cmds = [
#         f'cd {dir}',
#         f'tar -czvf {zip_file} {db_file} {mdl_file}',  # --xform s:^.*/::
#     ]
#     conn.run(' && '.join(cmds), echo=True)
#
#     conn.run(f'ls -la {dir}')
#     print('downloading zip file...')
#     conn.get(f'{dir}/{zip_file}')
#
#     print('backing up local data...')
#     today = datetime.utcnow().strftime('%y%m%d')
#     conn.local(f'cp db.sqlite3 backups/db.sqlite3.{today}', echo=True)
#     conn.local(f'cp model.pkl backups/model.pkl.{today}', echo=True)
#
#     print('unpacking zip file locally...')
#     conn.local('tar -xvf data.tar.gz', echo=True)
#     print('done')


# @task
# def commit(ctx):
#     print('committing changes')
#     msg = input('Commit message: ')
#     run('ga .', echo=True)
#     run(f'ga -c "{msg}', echo=True)
#     run(f'gu', echo=True)


@task
def deploy(ctx):
    dir = '/home/free/besetfree'
    print(f'Deploying site to {dir}')

    conn = get_conn()

    # clean dir
    conn.local('find . -iname ".ds_store" -delete', echo=True)
    conn.local('find . -depth -name __pycache__ -type d -exec rm -r "{}" \;', echo=True)

    # zip site
    files = {
        'requirements.txt',
        'main',
        'besetfree',
        'manage.py',
    }
    conn.local(f'tar -czf deploy.tar.gz {" ".join(files)}', echo=True)

    # copy to DO
    conn.put('deploy.tar.gz', dir)

    # stop site first
    systemctl(ctx, 'stop nginx')
    systemctl(ctx, 'stop gunicorn')

    # extract
    conn.run(f'tar -xf {dir}/deploy.tar.gz -C {dir}', echo=True)

    # create logs dir
    conn.run(f'mkdir -p {dir}/logs', echo=True)
    # conn.run(f'cp {dir}/db.sqlite3 {dir}/db.sqlite3.bck', echo=True)

    cmds = [
        f'cd {dir}',
        'source env/bin/activate',
        'pip install -qr requirements.txt',
        f'./manage.py migrate --no-input',
        f'./manage.py collectstatic --no-input',
    ]
    conn.run(' && '.join(cmds), echo=True)
    conn.run(f'sed -i "s/DEBUG = True/DEBUG = False/g" {dir}/besetfree/settings.py', echo=True)
    conn.run(f'rm {dir}/deploy.tar.gz', echo=True)

    systemctl(ctx, 'start nginx')
    systemctl(ctx, 'start gunicorn')


@task
def systemctl(ctx, cmd):
    conn = get_conn()
    sudo_pwd = Responder(
        pattern=r'password:',
        response=f'{pwd}\n')
    conn.sudo(f'systemctl {cmd}', echo=True, pty=True, watchers=[sudo_pwd])


@task
def reboot(ctx):
    conn = get_conn()
    sudo_pwd = Responder(
        pattern=r'password:',
        response=f'{pwd}\n')
    conn.sudo('reboot', echo=True, pty=True, watchers=[sudo_pwd])


@task
def run_command(ctx, cmd):
    conn = get_conn()
    cmds = [
        f'cd {dir}',
        'source env/bin/activate',
        f'./manage.py {cmd}',
    ]
    conn.run(' && '.join(cmds), echo=True)


@task
def tail_log(ctx):
    conn = get_conn()
    conn.run(f'tail -1000f {dir}/logs/default.log')
