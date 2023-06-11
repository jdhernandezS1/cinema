"""
Imports
"""
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 3rd party:
from django.shortcuts import render
from django.views import generic, View
from rest_framework import routers, serializers, viewsets
from django.http import JsonResponse
# Internal
from serializer.serializer import CommentViewSet
from . import models
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


class DashBoard(View):
    """
    A class for the dashboard
    """

    def get(self, request, *args, **kwargs):
        """
        Dashboard page view
        """
        template = "index.html"
        context = {"var": "var"}
        return render(
            request,
            template,
            context
        )


class DashVideo(View):
    """
    A class for the single video details
    """

    def get(self, request, ref, *args, **kwargs):
        """
        Dashboard page view
        """
        template = "index.html"
        context = {"var": "var"}
        return render(
            request,
            template,
            context
        )


def comments(request,  referece):
    """
    Import Comments and filter by film reference
    """
    filtered_comments = models.Comment.objects.filter(ref=referece)
    data = []
    for comment in filtered_comments:
        data.append({
            "author": comment.author,
            "content": comment.body,
            "created_on": comment.created_on,
            # Add other properties here as needed
        })
    return JsonResponse(data, safe=False)


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'Comments', CommentViewSet)
