from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render


def home_view(request: WSGIRequest):
    """Home view"""
    ctx = {
        'nav': 'home',
    }
    return render(request, 'main/home.html', ctx)


def about_view(request: WSGIRequest):
    """About view"""
    ctx = {
        'nav': 'about',
    }
    return render(request, 'main/about.html', ctx)
