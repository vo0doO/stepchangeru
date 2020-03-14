import wagtail.admin.rich_text.editors.draftail.features as draftail_features
from wagtail.admin.rich_text.converters.html_to_contentstate import InlineStyleElementHandler
from wagtail.core import hooks

# 1. Use the register_rich_text_features hook.
@hooks.register('register_rich_text_features')
def register_mark_feature(features):
    """
    Регистрация функции `mark`, которая использует встроенный тип стиля MARK MARK Draft.js,
    и хранится в виде HTML с тегом <mark>.
    """
    feature_name = 'mark'
    type_ = 'MARK'
    tag = 'mark'

    # 2. Сконфигурируйте, как Draftail обрабатывает объект на его панели инструментов.
    control = {
        'type': type_,
        'label': '☆',
        'description': 'Mark',
        # Это даже не требуется - Draftail имеет предопределенные стили для MARK.
        # 'style': {'textDecoration': 'line-through'},
    }

    # 3.Вызовите register_editor_plugin, чтобы зарегистрировать конфигурацию для Draftail.
    features.register_editor_plugin(
        'draftail', feature_name, draftail_features.InlineStyleFeature(control)
    )

    # 4.настроить преобразование контента из БД в редактор и обратно.
    db_conversion = {
        'from_database_format': {tag: InlineStyleElementHandler(type_)},
        'to_database_format': {'style_map': {type_: tag}},
    }

    # 5. Вызовите register_converter_rule, чтобы зарегистрировать преобразование преобразования контента.
    features.register_converter_rule('contentstate', feature_name, db_conversion)

    # 6. (необязательно) Добавьте функцию в список функций по умолчанию, чтобы сделать ее доступной
    #     # в полях с расширенным текстом, которые не указывают явный список «функций»
    features.default_features.append('mark')