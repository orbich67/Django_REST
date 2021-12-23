from django.contrib import admin
from todo.models import Project, ToDo


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'get_users', 'repository_link')
    fields = ('name', 'users', 'repository_link')
    ordering = ('id',)


@admin.register(ToDo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'project_name', 'text', 'user', 'created', 'updated', 'is_done')
    fields = ('project_name', 'text', 'user', ('created', 'updated'), 'is_done')
    readonly_fields = ('created', 'updated')
    ordering = ('id',)
