"""
Imports
"""
# 3rd party:
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
from django.contrib import admin
# Internal
# Register your models here.
from .models import Comment
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    """
    Admin model class For category
    """
    list_display = (
        'ref',
        'author',
        'email'
        )
    search_fields = [
        'ref'
        ]
    list_filter = (
        'ref',
        'created_on'
        )