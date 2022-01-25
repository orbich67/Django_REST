from rest_framework.relations import StringRelatedField
from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import Project, ToDo


class ProjectSerializer(ModelSerializer):
    # users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = ('id', 'name', 'repository_link', 'users')


class ToDoSerializer(ModelSerializer):
    # project_name = StringRelatedField()
    # user = StringRelatedField()
    is_done = StringRelatedField()

    class Meta:
        model = ToDo
        fields = ('id', 'project_name', 'text', 'created', 'updated', 'user', 'is_done')
