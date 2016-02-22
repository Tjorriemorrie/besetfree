import socket

DEBUG = True if any([socket.getfqdn().startswith(x) for x in ['127.0.0.1', 'localhost']]) else False
DEBUG = False
SECRET_KEY = '3tJhmR0XFbSOUG02Wpp7'
CSRF_ENABLED = True
CSRF_SESSION_LKEY = 'e8uXRmxo701QarZiXxGf'
HOST = 'localhost:9999'

