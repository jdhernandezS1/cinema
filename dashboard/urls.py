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
    # path(
    #     'video/<int>',
    #     views.index, name='dashboard'
    # ),
    path(
        'video/<int>',
        TemplateView.as_view(template_name='index.html')
    ),
]
