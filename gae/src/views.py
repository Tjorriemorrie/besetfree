from src import app
from flask import request, render_template, json, Response, abort, redirect


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')
