import os
import dj_database_url

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases


# DATABASES = {
#     'heroku': dj_database_url.parse("postgres://zqntnrtczjgnin:c006c74fcd46c783b44660990798fe4564cf3965c75d65841f7bf80453138f8e@ec2-54-195-247-108.eu-west-1.compute.amazonaws.com:5432/db1d8d7hvuapqs", ssl_require=False)
# }
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'kirsa',
        'USER': 'kirsa',
        'PASSWORD': 'Nhb1,e2yfk3$',
        'HOST': 'localhost',
        'PORT': '5432',
        'CONN_MAX_AGE': 900,
        'OPTIONS': {
            'sslmode': 'disable',
        }
    }
}

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }