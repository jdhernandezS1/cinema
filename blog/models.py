"""
Imports
"""
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 3rd party:
from django.db import models
from django.contrib.auth.models import User
# Internal
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


class Post(models.Model):
    """
    A class for Post model
    """
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="prod"
        )

    title = models.CharField(
        max_length=200,
        unique=True
        )

    title_slug = models.SlugField(
        max_length=200,
        unique=True
        )

    price = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        default=0
        )

    class Meta:
        """
        Items Order
        """
        ordering = [
            'title',
            # '-created_on',
            ]

    def __str__(self):
        """
        Return Title
        """
        return str(self.title)


class Comment(models.Model):
    """
    A class for Comment Model
    """
    producup = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        related_name='comments'
        )
    name = models.CharField(
        max_length=20
        )
    author = models.CharField(
        max_length=20
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
        return f"Comment{self.body} by {self.name}"
