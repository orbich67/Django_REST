from .base import *

DEBUG = False
ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'DRF',
        'USER': 'admin',
        'PASSWORD': 'qwerty',
        'HOST': 'db',
        'PORT': '5432'
    }
}
