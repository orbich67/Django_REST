from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from user.views import UserModelViewSet
from todo.views import ProjectModelViewSet, ToDoModelViewSet

router = DefaultRouter()
router.register('users', UserModelViewSet)
router.register('projects', ProjectModelViewSet)
router.register('todos', ToDoModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
