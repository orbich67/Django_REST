from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APITestCase
from .models import User
from .views import UserModelViewSet
from mixer.backend.django import mixer
from todo.models import ToDo


class TestUserView(APITestCase):

    def setUp(self) -> None:
        self.admin = User.objects.create_superuser('admin', email='admin@gmail.com', password='qwerty')

    def test_get_list(self):
        factory = APIRequestFactory()
        user = mixer.blend(User)

        # request = factory.post('/api/users/', {
        #     'username': 'test001',
        #     'first_name': 'Alex',
        #     'last_name': 'Tester',
        #     'email': 'test@test.com'
        # })
        #
        # force_authenticate(request, user=self.admin)
        # view = UserModelViewSet.as_view({'post': 'create'})
        # response = view(request)
        # self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        request = factory.get('/api/users/')
        force_authenticate(request, user=self.admin)
        view = UserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # проверяем, что создано 2 пользователя (первый admin)
        self.assertEqual(len(response.data), 2)
        # проверяем, что username 2-го пользователя равно созданному в "user = mixer.blend(User)"
        self.assertEqual(response.data[1]['username'], user.username)

    def test_client_get_list(self):
        # client = APIClient()
        self.client.login(username='admin', password='qwerty')
        # client.force_authenticate(user=self.admin)
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.client.logout()
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_client_todo(self):
        todo = mixer.blend(ToDo)

        self.client.login(username='admin', password='qwerty')
        response = self.client.get('/api/todos/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['text'], todo.text)
