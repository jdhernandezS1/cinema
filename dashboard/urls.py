# Imports
# 3rd party:
from django.urls import path, include
from django.contrib import admin
from django.views.generic.base import TemplateView
from rest_framework import routers
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Internal
from .  import models
from . import views
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

router = routers.DefaultRouter()
router.register(r'users', views.CommentViewSet)
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
        '',
        include(router.urls)
        ),
    path('api-com/', include('rest_framework.urls', namespace='rest_framework')),
]
