from django.db import models

from modelcluster.fields import ParentalKey

from wagtail.core.models import Page, Orderable
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel, PageChooserPanel, StreamFieldPanel, InlinePanel, MultiFieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.images.models import Image, AbstractImage, AbstractRendition
from wagtail.core.fields import StreamField
from streams import blocks


class HomePageCarouselImages(Orderable):
    """Betwen 1 and 5 imagefor home page carousel"""

    page = ParentalKey("home.HomePage", related_name="carousel_images")
    carousel_image = models.ForeignKey(
        Image,
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )

    panels = [
        ImageChooserPanel("carousel_image")
    ]

class HomePage(Page):
    """Home page model."""

    templates = "home/home_page.html"

    # max_count = 1

    banner_title = models.CharField(
        max_length=100,
        blank=False,
        null=True
            )

    banner_subtitle = RichTextField(
        features=["bold", "italic"],
        default=""
    )

    banner_image = models.ForeignKey(
        Image,
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )

    banner_cta = models.ForeignKey(
        "wagtailcore.Page",
        models.SET_NULL,
        null=True,
        blank=False,
        related_name="+"
    )

    content = StreamField(
        [
            ("cta", blocks.CTABlock()),

        ],
        null=True,
        blank=True,
    )

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            FieldPanel("banner_title"),
            FieldPanel("banner_subtitle"),
            ImageChooserPanel("banner_image"),
            PageChooserPanel("banner_cta"),
        ], heading="Banner options"),
        MultiFieldPanel([
            InlinePanel("carousel_images", max_num=5, min_num=1, label="Image"),
        ], heading="Carousel images"),
        StreamFieldPanel("content"),
    ]

    class Meta:

        verbose_name = "Home Page"
        verbose_name_plural = "Home Pages"