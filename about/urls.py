
# Imports
# 3rd party:
from django.urls import path, include
from django.contrib import admin
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Internal
from . import views
from django.views.generic.base import TemplateView

# ~~~~~~~~~~

urlpatterns = [
    path(
        'About',
        views.about.as_view(), 
        name='about'
        )
        ,
]


