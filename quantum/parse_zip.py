from bs4 import BeautifulSoup
import base64
import json
import hashlib
import logging
import os
import re
import zipfile

logger = logging.getLogger()


class Quantum:

    profiles = []
    structure = []

    def __init__(self):
        logger.info('start')
        self.parse_dir(os.path.abspath(os.path.dirname(__file__)) + '/exports')
        with open('profiles.json', 'w+') as f:
            json.dump(self.profiles, f)
        with open('structure.json', 'w+') as f:
            json.dump(list(self.structure), f)
        logger.info('end')

    def parse_dir(self, dir):
        for root, dirs, files in os.walk(dir):
            for zip_file in [f for f in files if f.endswith('zip')]:
                self.parse_zip(os.path.sep.join([root, zip_file]))

    def parse_zip(self, filename):
        logger.info('Parsing {}'.format(filename))
        if not os.path.isfile(filename) or not zipfile.is_zipfile(filename):
            raise ValueError('Expected a zip file?')
        with zipfile.ZipFile(filename, 'r') as z:
            for m in [m for m in z.infolist() if m.filename.endswith('htm') and not m.filename.startswith('Comp') and not m.filename.startswith('99') and not m.filename.startswith('09')]:
                logger.info(m.filename)
                f = z.open(m)
                self.parse_html(f.read())

    def parse_html(self, contents):
        html = BeautifulSoup(contents, 'html.parser')
        tables = html.find_all('table')

        # header
        t = tables[0]
        rows = t.find_all('tr')
        section = {
            'name': re.search(r'\((.*)\)', rows[0].text).groups()[0],
            'items': [],
        }
        section['hash'] = base64.urlsafe_b64encode(hashlib.md5(section['name']).digest())
        logger.info('section {}'.format(section))

        # update structure
        structure_section = next((s for s in self.structure if s['hash'] == section['hash']), None)
        if not structure_section:
            self.structure.append(section)

        # profile
        user_name = re.search(r'Name: (.*)', rows[2].find_all('td')[0].text).groups()[0]
        user_hash = base64.urlsafe_b64encode(hashlib.md5(user_name).digest())
        logger.info('profiles: {}'.format(self.profiles))
        profile = next((p for p in self.profiles if p['hash'] == user_hash), None)
        if not profile:
            profile = {
                'hash': user_hash,
                'name': user_name,
                'gender': re.search(r'Sex: (.*)', rows[2].find_all('td')[1].text).groups()[0],
                'age': re.search(r'Age: (.*)', rows[2].find_all('td')[2].text).groups()[0],
                'figure': re.search(r'Figure: (.*)', rows[3].find_all('td')[1].text).groups()[0],
                'tests': [],
            }
            logger.info('profile: {}'.format(profile))
            self.profiles.append(profile)

        # add test
        tests = profile['tests']
        tested_at = re.search(r'Testing Time:\h?(.*)', rows[3].find_all('td')[2].text).groups()[0].strip()
        test = next((t for t in tests if t['tested_at'] == tested_at), None)
        if not test:
            test = {
                'tested_at': tested_at,
                'sections': [],
            }
            tests.append(test)

        # areas
        t = tables[4]
        for tr in t.find_all('tr')[1:]:
            tds = tr.find_all('td')
            item = {
                'name': tds[0].text,
                'value': tds[2].text,
            }
            section['items'].append(item)
            logger.info('{}'.format(item))
        test['sections'].append(section)

        # logger.info(self.profiles)


if __name__ == '__main__':
    logging.basicConfig(
        level=logging.DEBUG,
        format='%(asctime)s - %(levelname)-7s - [%(filename)s:%(funcName)s] %(message)s'
    )

    quantum = Quantum()
