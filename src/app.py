import webapp2
from src.main import controller
from settings import *


wsgi = webapp2.WSGIApplication(
    [
        # main
        webapp2.Route(r'/<:.*>', name='home', handler=controller.IndexPage),
    ],
    debug=DEBUG,
    config=CONFIG,
)
