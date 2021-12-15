from django.contrib import admin
from todo.models import Project, ToDo


@admin.register(Project)
class TodoAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_users', 'repository_link')
    fields = ('name', 'users', 'repository_link')


@admin.register(ToDo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ('project_name', 'text', 'user', 'created', 'updated', 'is_active')
    fields = ('project_name', 'text', 'user', ('created', 'updated'), 'is_active')
    readonly_fields = ('created', 'updated')
    ordering = ('project_name',)
