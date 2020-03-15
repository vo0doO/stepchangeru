import os

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'HOST': 'ec2-54-195-247-108.eu-west-1.compute.amazonaws.com',
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'db1d8d7hvuapqs',
#         'USER': 'zqntnrtczjgnin',
#         'PASSWORD': 'c006c74fcd46c783b44660990798fe4564cf3965c75d65841f7bf80453138f8e',
#         'PORT': '5432',
#         'CONN_MAX_AGE': 900
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}