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

class HomePage(RoutablePageMixin, Page):
    """Home page model."""
    # TODO: Сделать этот банер стримовым блоком
    templates = "home/home_page.html"

    banner_title = models.CharField(max_length=100,blank=False,null=True)

    banner_subtitle = models.CharField(max_length=250, default="")

    banner_image = models.ForeignKey(Image,on_delete=models.SET_NULL,null=True,blank=False,related_name="+")



    button_page = models.ForeignKey("wagtailcore.Page",models.SET_NULL,null=True,blank=False,related_name="+")

    banner_button_url = models.URLField(default="/login/", null=True, blank=False)

    content = StreamField(
        [
            ("cta", blocks.CTABlock()),
            ("banner", blocks.BannerBlock()),
            ("row", blocks.RowBlock()),
        ],
        null=True, blank=True,)

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            FieldPanel("banner_title"),
            FieldPanel("banner_subtitle"),
            ImageChooserPanel("banner_image"),
            PageChooserPanel("banner_button_page"),
            FieldPanel("banner_button_url"),
        ], heading="Banner options"),
        MultiFieldPanel([
            InlinePanel("carousel_images", max_num=5, min_num=1, label="Image"),
        ], heading="Carousel images"),
        StreamFieldPanel("content"),
    ]

    class Meta:
        verbose_name = "Home Page"
        verbose_name_plural = "Home Pages"