# Generated by Django 3.2.8 on 2021-12-19 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_alter_todo_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='is_active',
            field=models.BooleanField(default=False, verbose_name='Выполнено'),
        ),
    ]
