from django_filters import rest_framework as filters
from .models import Project, ToDo


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class ToDoFilter(filters.FilterSet):
    min_created = filters.CharFilter(field_name='created', lookup_expr='gte')
    max_created = filters.CharFilter(field_name='created', lookup_expr='lte')

    class Meta:
        model = ToDo
        fields = ['project_name']
