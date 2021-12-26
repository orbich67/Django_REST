from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from .serializers import UserSerializer
from .models import User
from rest_framework.mixins import ListModelMixin, UpdateModelMixin, RetrieveModelMixin
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, DjangoModelPermissions, IsAuthenticated


class UserModelViewSet(ListModelMixin, UpdateModelMixin, RetrieveModelMixin, GenericViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    permission_classes = [DjangoModelPermissions]

    queryset = User.objects.all()
    serializer_class = UserSerializer
