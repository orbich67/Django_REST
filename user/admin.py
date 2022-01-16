from django.contrib import admin
from user.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):

    list_display = ('username', 'first_name', 'last_name', 'email', 'password')
    # fields = ('username', 'first_name', 'last_name', 'email', 'password')
    ordering = ('username',)
