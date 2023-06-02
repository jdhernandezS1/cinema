"""
Imports
"""
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 3rd party:
from django.shortcuts import render
from django.views import generic, View
from rest_framework import routers, serializers, viewsets
from rest_framework import routers
# Internal
from .models import Comment
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


# Serializers define the API representation.
class CommentSerializer(serializers.ModelSerializer):
    """
    A class TO serialize the models into json file
    """
    class Meta:
        model = Comment
        fields = [
            'id',
            'ref',
            'author',
            'email',
            'body',
            'created_on'
        ]


# ViewSets define the view behavior.
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'Comments', CommentViewSet)


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
