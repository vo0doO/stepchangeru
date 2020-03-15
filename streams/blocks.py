from django.db import models
from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock
from wagtail.images.models import Image


class CarouselImages(blocks.StructBlock):
    """Betwen 1 and 5 imagefor home page carousel."""


    images = blocks.ListBlock(
        blocks.StructBlock(
            [
                ("carousel_image", ImageChooserBlock(required=False)),
            ]
        )
    )

    class Meta:
        template = "patterns/molecules/streams/carousel-image.html"
        icon = "placeholder"
        label = "Image carousel Block"


class TitleAndTextBlock(blocks.StructBlock):

    title = blocks.CharBlock(required=True, help_text='Add your Title')
    text = blocks.TextBlock(required=True, help_text='Add additional text')

    class Meta:
        template = "patterns/atoms/streams/title_and_text_block.html"
        icon = "edit"
        lable = "Title & Text"


class CardBlock(blocks.StructBlock):
    """Cards blocks from 1 or 5 card"""

    cards = blocks.ListBlock(
        blocks.StructBlock(
            [
                ("image", ImageChooserBlock(required=True)),
                ("title", blocks.CharBlock(required=True, max_length=40)),
                ("text", blocks.TextBlock(required=True, max_length=200)),
                ("button_page", blocks.PageChooserBlock(required=False)),
                ("button_url", blocks.URLBlock(required=False, help_text=''))
            ]
        )
    )
     
    class Meta:
        template = "patterns/molecules/streams/card_block.html"
        icon = "doc-full-inverse"
        label = "Card Block"


class RichtextBlock(blocks.RichTextBlock):
    def __init__(self, required=True, help_text=None, editor='default', validators=(), **kwargs):
        super().__init__(**kwargs)
        self.features = [
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "bold",
            "italic",
            "ol",
            "ul",
            "hr",
            "link",
            "document-link",
            "image",
            "embed",
            "mark",
            "code",
            "superscript",
            "subscript",
            "strikethrough"
            "blockquote"
        ]

    class Meta:
        template = "patterns/atoms/streams/richtext_block.html"
        icon = "edit"
        label = "Full RichText"


class SimpleRichtextBlock(blocks.RichTextBlock):
    def __init__(self, required=True, help_text=None, editor='draftail', validators=(), **kwargs):
        super().__init__(**kwargs)
        self.features = [
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "bold",
            "italic",
            "ol",
            "ul",
            "link",
        ]

    class Meta:
        template = "patterns/atoms/streams/richtext_block.html"
        icon = "edit"
        label = "Small RichText"


class CTABlock(blocks.StructBlock):
    """Call to action block"""

    image = ImageChooserBlock(required=False, help_text="Image from call to action. If need.")
    title = blocks.CharBlock(required=True, max_length=50)
    text = blocks.RichTextBlock(required=True)
    button_page = blocks.PageChooserBlock(required=False)
    button_url = blocks.URLBlock(required=False)
    button_text = blocks.CharBlock(required=True, default="Узнать больше", max_length=40)

    class Meta:
        template = "patterns/molecules/streams/cta_block.html"
        icon = "chain-broken"
        label = "Call to action"


class ButtonLinkStructValue(blocks.StructValue):
    """Adding logic for our url"""
    def url(self):
        button_page = self.get('button_page')
        button_url = self.get('button_url')
        if button_page:
            return button_page.url
        elif button_url:
            return button_url
        return None


class ButtonBlock(blocks.StructBlock):

    button_text = blocks.CharBlock(required=True, max_length=100, help_text="Button Text")
    button_page = blocks.PageChooserBlock(required=False, help_text='First link')
    button_url = blocks.CharBlock(required=False, help_text='Last link')

    class Meta:
        template = 'patterns/atoms/streams/button_block.html'
        icon = "placeholder"
        label = "Single button"
        value_class = ButtonLinkStructValue


class BannerBlock(blocks.StructBlock):
    # TODO: изменить с фиелд на блок
    """Betwen 1 and 5 imagefor home page carousel"""

    title = blocks.CharBlock(max_length=100,blank=True,null=True)

    subtitle = blocks.CharBlock(max_length=250, null=True,blank=True, default="")

    image = ImageChooserBlock(Image, on_delete=models.SET_NULL,null=True,blank=True,related_name="+")

    button_text = blocks.CharBlock(max_length=250, blank=True, null=True)

    button_page = blocks.PageChooserBlock(required=False)

    button_url = blocks.CharBlock(required=False)


    class Meta:
        template = "patterns/organism/streams/banner_block.html"
        icon = "image"
        label = "Banner"


class AlertBlock(blocks.StructBlock):
    """Alert block from added to rows in home page"""

    css_class = blocks.ChoiceBlock(
        choices=([
            ("info", "Info"),
            ("error", "Error"),
        ]), help_text="Цвет подложки и значёк"
    )
    title = blocks.CharBlock(max_length=250, help_text="Верхний, жирный текст")
    text = RichtextBlock()

    class Meta:
        template = "patterns/molecules/streams/alert_block.html"
        icon = "warning"
        label = "Alert Block"


class WidgetContainerBlock(blocks.StructBlock):
    """Widget container from content container in row"""
    classname = blocks.ListBlock(
        blocks.StructBlock(
            [
                ("color", blocks.ChoiceBlock(
                     choices=(
                         [
                             ("widgetBG-Orange", "Orange"),
                             ("widgetBG-Purple", "Purple"),
                             ("widgetBG-mistGrey", "mistGrey"),
                             ("widgetBG-charcoalGrey", "charcoalGrey"),
                             ("widgetBG-trustBlue", "trustBlue")
                         ]
                     )
                 )),
                ("positions", blocks.ChoiceBlock(
                    choices=(
                         [
                             ("widgetLeft", "Left"),
                             ("widgetRight", "Right"),
                             ("widgetContainerClear", "Clear")
                         ]
                     )
                 ))
            ]
        )
    )

    class Meta:
        template = "patterns/molecules/streams/container_block.html"
        icon = "folder"
        label = "Container"


class ContainerBlock(blocks.StructBlock):
    """Alert block from added to rows in home page."""

    body = blocks.StreamBlock([
        ("widget", WidgetContainerBlock(required=False)),
        ("text", RichtextBlock(required=False)),
        ("alert", AlertBlock(required=False)),
        ("card", CardBlock(required=False)),
        ("cta", CTABlock(required=False)),
    ])


    class Meta:
        template = "patterns/molecules/streams/container_block.html"
        icon = "folder"
        label = "Container"


class RowBlock(blocks.StructBlock):
    """Row form home page"""

    width = blocks.ChoiceBlock(
        choices=([
            ("default", "Default"),
            ("full", "Full"),
        ])
    )

    content = blocks.StreamBlock([
        ("container", ContainerBlock()),
        ("p", RichtextBlock()),
        ("alert", AlertBlock()),
        ("card", CardBlock()),
        ("cta", CTABlock()),
    ])

    class Meta:
        template = "patterns/organism/streams/row_block.html"
        icon = "grip"
        label = "Page row"

if __name__ == "__main__":
    pass