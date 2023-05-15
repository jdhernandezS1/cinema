"""
Imports
"""
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 3rd party:
from django.urls import path
# Internal
from . import views
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


urlpatterns = [
    path(
        "auth0/",
        views.index,
        name="index"
        ),
    path(
        "login/",
        views.login,
        name="login"
        ),
    path(
        "logout/",
        views.logout,
        name="logout"
        ),
    path(
        "callback/",
        views.callback,
        name="callback"
        ),
]
