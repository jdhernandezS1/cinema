"""
Imports
"""
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 3rd party:
from django.shortcuts import render
from django.views import generic, View
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.middleware.csrf import get_token
# Internal
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


class about(View):
    """
    A class for the Contact Us Page
    """
    @csrf_exempt
    def get(self, request, *args, **kwargs):
        """
        about page view
        """
        template =  "index.html"
        context = {
            'csrfToken': get_token(request)
            }
        return render(
            request,
            template,
            context
            )
    @csrf_exempt
    def post(self, request, *args, **kwargs):
        """
        POST Function
        """
        context = {
            'csrfToken': get_token(request)
            }
        template =  "index.html"
        return render(
            request,
            template,
            context,
            )
