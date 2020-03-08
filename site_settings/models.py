from django.db import models

from wagtail.admin.edit_handlers import FieldPanel, MultiFieldPanel
from wagtail.contrib.settings.models import BaseSetting, register_setting

# Create your models here.
@register_setting
class SocialMediaSettings(BaseSetting):
    """Social links settings"""

    facebook = models.URLField(blank=True, null=True, help_text="facebook URL", max_length=1023)
    twitter = models.URLField(blank=True, null=True, help_text="twitter URL", max_length=1023)
    vkontakte = models.URLField(blank=True, null=True, help_text="vkontakte URL", max_length=1023)

    panels = [
        MultiFieldPanel([
            FieldPanel("facebook"),
            FieldPanel("twitter"),
            FieldPanel("vkontakte"),
        ])
    ]