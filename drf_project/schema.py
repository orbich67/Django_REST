import graphene
from graphene_django import DjangoObjectType
from user.models import User
from todo.models import ToDo, Project


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class TodoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)

    def resolve_all_users(root, info):
        return User.objects.all()

    user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))

    def resolve_user_by_id(root, info, id):
        try:
            return User.objects.get(id=id)
        except User.DoesNotExist:
            return None

    user_by_name = graphene.List(UserType, first_name=graphene.String(required=False))

    def resolve_user_by_name(root, info, first_name=None):
        users = User.objects.all()
        if first_name:
            users = users.filter(first_name=first_name)
        return users

    all_todos = graphene.List(TodoType)

    def resolve_all_todos(root, info):
        return ToDo.objects.all()

    todo_by_id = graphene.Field(TodoType, id=graphene.Int(required=True))

    def resolve_todo_by_id(root, info, id):
        try:
            return ToDo.objects.get(id=id)
        except ToDo.DoesNotExist:
            return None

    all_projects = graphene.List(ProjectType)

    def resolve_all_projects(root, info):
        return Project.objects.all()


class UserCreateMutation(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)

    user = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, username, first_name, last_name, email):
        user = User(username=username, first_name=first_name, last_name=last_name, email=email)
        user.save()
        return UserCreateMutation(user)


class UserUpdateMutation(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        username = graphene.String(required=False)
        first_name = graphene.String(required=False)
        last_name = graphene.String(required=False)
        email = graphene.String(required=False)

    user = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, id, username=None, first_name=None, last_name=None, email=None):
        user = User.objects.get(id=id)
        if username:
            user.username = username
        if first_name:
            user.first_name = first_name
        if last_name:
            user.last_name = last_name
        if email:
            user.email = email
        if username or first_name or last_name or email:
            user.save()
        return UserUpdateMutation(user)

class Mutations(graphene.ObjectType):
    create_user = UserCreateMutation.Field()
    update_user = UserUpdateMutation.Field()

schema = graphene.Schema(query=Query, mutation=Mutations)
