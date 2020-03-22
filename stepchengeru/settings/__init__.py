from split_settings.tools import optional, include

include(
    # Параметры среды нагрузки

    # optional('local/base.py'),  # Мы можем «path» любые настройки из локального файла папки env.py.
    #
    # # Здесь мы должны иметь порядок из-за зависимости
    'base/paths.py',
    'base/apps.py',
    'base/middleware.py',
    'base/database.py',

    # Загрузить все другие параметры
    'base/*.py',

    optional('local/*.py'),  # мы можем загрузить любые другие настройки из локальной папки
)

from . import *