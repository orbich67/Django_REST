from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectSerializer, ToDoSerializer
from rest_framework.pagination import PageNumberPagination
from .models import Project, ToDo
from .filters import ProjectFilter, ToDoFilter


class ProjectPagination(PageNumberPagination):
    page_size = 10


class ToDoPagination(PageNumberPagination):
    page_size = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = ProjectPagination
    filterset_class = ProjectFilter


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    pagination_class = ToDoPagination
    filterset_fields = ['project_name']
    filterset_class = ToDoFilter

    def perform_destroy(self, instance):
        instance.is_done = True
        instance.save()

