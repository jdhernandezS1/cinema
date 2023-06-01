"""
Imports
"""
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 3rd party:
from django.db import models
from django.contrib.auth.models import User
# Internal
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


class Comment(models.Model):
    """
    A class for Comment Model
    """
    ref = models.IntegerField()
    author = models.CharField(
        max_length=40
        )
    email = models.EmailField()
    body = models.TextField()
    created_on = models.DateTimeField(
        auto_now_add=True
        )

    class Meta:
        """
        Items Order
        """
        ordering = ['created_on']

    def __str__(self):
        return f"Comment{self.body} by {self.author}"