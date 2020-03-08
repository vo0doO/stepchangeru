
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'kq)@g8qy^x=$5b&-h&%ns5i=dfi@001m#dougkfclm2-gukyhk'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['*']

INSTALLED_APPS += ["wagtail.contrib.styleguide"]


INTERNAL_IPS = ["127.0.0.1"]


try:
    from .local import *
except ImportError:
    pass
