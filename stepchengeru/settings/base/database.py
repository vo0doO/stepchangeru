import os
import dj_database_url

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases


DATABASES = {
    'default': dj_database_url.parse("postgres://jxqngigzyplber:8137bbda577d4cd0744aad49bebbde3915510437829fbf8ddcfd9840d1e684ec@ec2-54-217-204-34.eu-west-1.compute.amazonaws.com:5432/ddr09e6k0paset", conn_max_age=600, ssl_require=True)
}
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'kirsa',
#         'USER': 'kirsa',
#         'PASSWORD': 'Nhb1,e2yfk3$',
#         'HOST': 'localhost',
#         'PORT': '5432',
#         'CONN_MAX_AGE': 900,
#         'OPTIONS': {
#             'sslmode': 'disable',
#         }
#     }
# }

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }