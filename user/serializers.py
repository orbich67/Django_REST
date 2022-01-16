from rest_framework.serializers import HyperlinkedModelSerializer
from .models import User


class UserSerializer(HyperlinkedModelSerializer):

    def create(self, *args, **kwargs):
        user = super().create(*args, **kwargs)
        user.set_password(user.password)
        user.save()
        return user

    def update(self, *args, **kwargs):
        user = super().update(*args, **kwargs)
        user.set_password(user.password)
        user.save()
        return user

    class Meta:
        model = User
        fields = ('url', 'username', 'first_name', 'last_name', 'email')


class UserSerializerV2(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'first_name', 'last_name', 'email', 'is_superuser', 'is_staff')
