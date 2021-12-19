from django.db import models
from user.models import User


class Project(models.Model):
    name = models.CharField(max_length=64, unique=True, verbose_name='Название проекта')
    repository_link = models.URLField(max_length=300, unique=True, null=True, blank=True,
                                      verbose_name='Ссылка на репозиторий')
    users = models.ManyToManyField(User, verbose_name='Работают над проектом')

    def __str__(self):
        return f'{self.name} ({self.repository_link})'

    def get_users(self):
        return ', '.join([users.username for users in self.users.all()])
    get_users.short_description = 'Users'


class ToDo(models.Model):
    project_name = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name='Проект')
    text = models.TextField(verbose_name='Содержание')
    created = models.DateTimeField(auto_now_add=True, verbose_name='Создано')
    updated = models.DateTimeField(auto_now=True, verbose_name='Обновлено')
    user = models.ForeignKey(User, models.PROTECT, verbose_name='Исполнитель')
    is_done = models.BooleanField(default=False, verbose_name='Выполнено')
