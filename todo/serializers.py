from rest_framework.relations import StringRelatedField
from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Project, ToDo


class ProjectSerializer(HyperlinkedModelSerializer):
    # users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = ('name', 'repository_link', 'users')


class ToDoSerializer(HyperlinkedModelSerializer):
    project_name = StringRelatedField()

    class Meta:
        model = ToDo
        fields = ('id', 'project_name', 'text', 'created', 'updated', 'user', 'is_done')
