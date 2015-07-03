import webapp2
from google.appengine.api import users


class BaseHandler(webapp2.RequestHandler):
    def dispatch(self):
        webapp2.RequestHandler.dispatch(self)

    @webapp2.cached_property
    def template_values(self):
        # Add the navigation categories to the values for every view
        return {
        }

    @webapp2.cached_property
    def user(self):
        return users.get_current_user()
