from django.db import models
from user.models import User


class Project(models.Model):
    name = models.CharField(max_length=64, unique=True)
    repository_link = models.URLField(max_length=300, unique=True)
    users = models.ManyToManyField(User)

    def get_users(self):
        return ', '.join([users.username for users in self.users.all()])
    get_users.short_description = 'Users'


class ToDo(models.Model):
    project_name = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, models.PROTECT)
    is_active = models.BooleanField(default=False)
