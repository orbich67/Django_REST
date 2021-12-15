from rest_framework.serializers import HyperlinkedModelSerializer

from user.serializers import UserSerializer
from .models import Project, ToDo


class ProjectSerializer(HyperlinkedModelSerializer):
    users = UserSerializer(many=True)

    class Meta:
        model = Project
        fields = ('name', 'repository_link', 'users')


class ToDoSerializer(HyperlinkedModelSerializer):
    user = UserSerializer()

    class Meta:
        model = ToDo
        fields = ('project_name', 'text', 'created', 'updated', 'user', 'is_active')
