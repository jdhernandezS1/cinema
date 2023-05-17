"""
Imports
"""
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 3rd party:
from django.shortcuts import render
from django.views import generic, View
from django.views.decorators.csrf import csrf_exempt

# Internal
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


class about(View):
    """
    A class for the Contact Us Page
    """
    def get(self, request, *args, **kwargs):
        """
        about page view
        """
        template =  "index.html"

        return render(
            request,
            template
            )
    @csrf_exempt
    def post(self, request, *args, **kwargs):
        """
        POST Function
        """
        template =  "index.html"
        return render(
            request,
            template,
            )
