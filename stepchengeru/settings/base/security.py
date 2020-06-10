import os

SECRET_KEY = os.getenv(
    'DJANGO_SECRET_KEY',
    # безопасное значение, используемое для разработки, когда DJANGO_SECRET_KEY не может быть установлен
    'kq)@g8qy^x=$5b&-h&%ns5i=dfi@001m#dougkfclm2-gukyhk'
)
