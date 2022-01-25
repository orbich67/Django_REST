from rest_framework.viewsets import GenericViewSet
from .serializers import UserSerializer, UserSerializerV2
from .models import User
from rest_framework.mixins import ListModelMixin, UpdateModelMixin, RetrieveModelMixin
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.permissions import DjangoModelPermissions


class UserModelViewSet(ListModelMixin, UpdateModelMixin, RetrieveModelMixin, GenericViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    permission_classes = [DjangoModelPermissions]

    queryset = User.objects.all()
    # serializer_class = UserSerializer

    def get_serializer_class(self):
        if self.request.version == 'v2':
            return UserSerializerV2
        return UserSerializer
