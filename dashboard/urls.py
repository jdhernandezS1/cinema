# Imports
# 3rd party:
from django.urls import path, include
from django.contrib import admin
from django.views.generic.base import TemplateView
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Internal
from . import models
from . import views
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


urlpatterns = [
    path(
        '',
        views.DashBoard.as_view(),
        name='dashboard'
        ),
    path(
        'video/<int:ref>',
        views.DashVideo.as_view(),
        name='dashvideo'
    ),
    path(
        'router/',
        include(views.router.urls)
        ),
    path(
        'comments/<int:referece>',
        views.comments,
        name='send_json'
        ),
    path(
        # Api Manager Url , login as user or logut links
        'ApiManage/',
        include(
            'rest_framework.urls',
            namespace='rest_framework'
            )
            ),
]
