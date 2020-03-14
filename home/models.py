from django.db import models

from modelcluster.fields import ParentalKey

from wagtail.core.models import Page, Orderable
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel, PageChooserPanel, StreamFieldPanel, InlinePanel, MultiFieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.images.models import Image, AbstractImage, AbstractRendition
from wagtail.core.fields import StreamField
from streams import blocks
from wagtail.contrib.routable_page.models import RoutablePageMixin, route
from django.shortcuts import render


class HomePage(RoutablePageMixin, Page):
    """Home page model."""
    # TODO: Сделать этот банер стримовым блоком

    content = StreamField(
        [
            ("banner", blocks.BannerBlock()),
            ("cta", blocks.CTABlock()),
            ("row", blocks.RowBlock()),
        ],
        null=True, blank=True,)

    content_panels = Page.content_panels + [
        StreamFieldPanel("content"),
    ]

    class Meta:
        verbose_name = "Home Page"
        verbose_name_plural = "Home Pages"