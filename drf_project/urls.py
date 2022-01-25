from django.contrib import admin
from django.urls import path, include, re_path
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
from rest_framework.routers import DefaultRouter
from user.views import UserModelViewSet
from todo.views import ProjectModelViewSet, ToDoModelViewSet
from rest_framework.authtoken import views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from graphene_django.views import GraphQLView


schema_view = get_schema_view(
    openapi.Info(
        title='drf_project',
        default_version='v1',
        description='',
        contact=openapi.Contact(email='info@test.ru'),
        license=openapi.License(name='MIT')
    ),
    public=True,
    permission_classes=(AllowAny,)
)

router = DefaultRouter()
router.register('users', UserModelViewSet)
router.register('projects', ProjectModelViewSet)
router.register('todos', ToDoModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', views.obtain_auth_token),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0)),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0)),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
