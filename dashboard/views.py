"""
Imports
"""
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 3rd party:
from django.shortcuts import render
from django.views import generic, View
from rest_framework import routers, serializers, viewsets
# Internal
from .models import Comment
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class CommentSerializer(serializers.ModelSerializer):
    """
    A class TO serialize the models into json file
    """
    class Meta:
        model = Comment
        fields = (
            'id',
            'ref',
            'author',
            'email',
            'body',
            'created_on'
            )
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class DashBoard(View):
    """
    A class for the dashboard
    """
    def get(self, request, *args, **kwargs):
        """
        Dashboard page view
        """
        template = "index.html"
        context = {"var" : "var"}
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
        context = {"var" : "var"}
        return render(
            request,
            template,
            context
            )
