from src import app
from flask.ext.jsontools import jsonapi
from flask import render_template, request
from google.appengine.api import mail


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')


@app.route('/contact/email', methods=['POST'])
@jsonapi
def contact_email():
    app.logger.info('Contact email: {}'.format(request.form))
    mail.send_mail_to_admins(
        sender='{}'.format('jacoj82@gmail.com'),
        subject='Enquiry',
        body='{}\n\nName: {}\nNumber: {}\nEmail: {}'.format(
            request.form.get('enquiry', 'enquiry empty'),
            request.form.get('name', 'noname'),
            request.form.get('number', 'nonumber'),
            request.form.get('email', 'noemail'),
        ),
    )

    return


@app.route('/newsletter/email', methods=['POST'])
@jsonapi
def newsletter_email():
    app.logger.info('Newsletter email: {}'.format(request.form))
    mail.send_mail_to_admins(
        sender='{}'.format('jacoj82@gmail.com'),
        subject='Newsletter signup',
        body='Email: {}'.format(
            request.form.get('email', 'noemail'),
        ),
    )

    return
