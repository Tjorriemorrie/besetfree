import logging as log
from src.base import BaseHandler
from google.appengine.ext import ndb
from google.appengine.api import users
from src.settings import JINJA_ENVIRONMENT
from google.appengine.api import mail
import time
import json


class IndexPage(BaseHandler):
    def get(self, *args, **kwargs):
        log.info('index page requested')
        template = JINJA_ENVIRONMENT.get_template('main/templates/index.html')
        self.response.write(template.render(self.template_values))
        log.info('index page template values {}'.format(self.template_values))


class MessagePage(BaseHandler):
    def post(self, *args, **kwargs):
        log.info('contact page requested')

        body = '''
From: {}
Email: {}
Number: {}
Message: {}
Assist: {}
        '''.format(
            self.request.get('name', default_value='unknown'),
            self.request.get('email', default_value='unknown'),
            self.request.get('number', default_value='unknown'),
            self.request.get('message', default_value='unknown'),
            self.request.get('assist', default_value='unknown'),
        ).strip()

        mail.send_mail(
            sender="jacoj82@gmail.com",
            to="jacoj82@gmail.com,nennakind@gmail.com",
            subject="BeSetFree.co.za website message ({})".format(time.time()),
            body=body,
        )

        self.response.headers['Content-Type'] = 'application/json'
        obj = {
            'success': True,
        }
        self.response.out.write(json.dumps(obj))