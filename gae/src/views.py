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
		sender='{} <{}>'.format(request.form.get('name', 'Unknown'), request.form.get('email', 'unknown@example.com')),
		subject='Enquiry',
		body='{}'.format(request.form.get('enquiry', 'enquiry empty')),
	)

	return
