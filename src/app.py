import webapp2
from src.main import controller
from settings import *


wsgi = webapp2.WSGIApplication(
    [
        webapp2.Route(r'/message', name='message', handler=controller.MessagePage),
        webapp2.Route(r'/<:.*>', name='home', handler=controller.IndexPage),
    ],
    debug=DEBUG,
    config=CONFIG,
)
