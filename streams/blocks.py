from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock
from django.db import models
from wagtail.images.models import Image


class CarouselImages(blocks.StructBlock):
    """Betwen 1 and 5 imagefor home page carousel"""


    images = blocks.ListBlock(
        blocks.StructBlock(
            [
                ("carousel_image", ImageChooserBlock(required=False)),
            ]
        )
    )

    class Meta:
        template = "streams/carousel-image.html"
        icon = "placeholder"
        label = "Image carousel Block"


class TitleAndTextBlock(blocks.StructBlock):
    html_attr_id = blocks.CharBlock(max_length=10, required=False, help_text="id in html tag attr"),
    html_attr_class = blocks.CharBlock(max_length=10, required=False, help_text="Css class. Set style"),
    title = blocks.CharBlock(required=True, help_text='Add your Title')
    text = blocks.TextBlock(required=True, help_text='Add additional text')

    class Meta:
        template = "streams/title_and_text_block.html"
        icon = "edit"
        lable = "Title & Text"


class CardBlock(blocks.StructBlock):

    html_attr_id = blocks.CharBlock(max_length=10, required=False, help_text="id in html tag attr"),
    html_attr_class = blocks.CharBlock(max_length=10, required=False, help_text="Css class. Set style"),

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
        template = "streams/card_block.html"
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
    html_attr_id = blocks.CharBlock(max_length=10, required=False, help_text="id in html tag attr"),
    html_attr_class = blocks.CharBlock(max_length=10, required=False, help_text="Css class. Set style"),

    class Meta:
        template = "streams/richtext_block.html"
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

    html_attr_id = blocks.CharBlock(max_length=10, required=False, help_text="id in html tag attr"),
    html_attr_class = blocks.CharBlock(max_length=10, required=False, help_text="Css class. Set style"),
    class Meta:
        template = "streams/richtext_block.html"
        icon = "edit"
        label = "Small RichText"


class CTABlock(blocks.StructBlock):
    """Call to action block"""
    html_attr_id = blocks.CharBlock(max_length=10, required=False, help_text="id in html tag attr"),
    html_attr_class = blocks.CharBlock(max_length=10, required=False, help_text="Css class. Set style"),
    image = ImageChooserBlock(required=False, help_text="Image from call to action. If need.")
    title = blocks.CharBlock(required=True, max_length=50)
    text = blocks.RichTextBlock(required=True)
    button_page = blocks.PageChooserBlock(required=False)
    button_url = blocks.URLBlock(required=False)
    button_text = blocks.CharBlock(required=True, default="Узнать больше", max_length=40)

    class Meta:
        template = "streams/cta_block.html"
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

    # def latest_posts(self):
    #     return blog.models.BlogDetailPage.objects.live()[:3]


class ButtonBlock(blocks.StructBlock):
    html_attr_id = blocks.CharBlock(max_length=10, required=False, help_text="id in html tag attr"),
    html_attr_class = blocks.CharBlock(max_length=10, required=False, help_text="Css class. Set style"),
    button_text = blocks.CharBlock(required=True, max_length=100, help_text="Button Text")
    button_page = blocks.PageChooserBlock(required=False, help_text='First link')
    button_url = blocks.CharBlock(required=False, help_text='Last link')

    # def get_context(self, request, *args, **kwargs):
    #     context = super().get_context(request, *args, **kwargs)
    #     context['latest_posts'] = blog.models.BlogDetailPage.objects.live().public()[:3]
    #     return context

    class Meta:
        template = 'streams/button_block.html'
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
        template = "streams/banner_block.html"
        icon = "image"
        label = "Banner"


class AlertBlock(blocks.StructBlock):
    css_class = blocks.ChoiceBlock(
        choices=([
            ("info", "Info"),
            ("error", "Error"),
        ]), help_text="Цвет подложки и значёк"
    )
    title = blocks.CharBlock(max_length=250, help_text="Верхний, жирный текст")
    text = RichtextBlock()

    class Meta:
        template = "streams/alert_block.html"
        icon = "warning"
        label = "Alert Block"

class RowBlock(blocks.StructBlock):
    """Row form home page"""

    width = blocks.ChoiceBlock(
        choices=([
            ("default", "Default"),
            ("full", "Full"),
        ])
    )

    content = blocks.StreamBlock([
        ("p", RichtextBlock()),
        ("alert", AlertBlock()),
        ("card", CardBlock()),
        ("cta", CTABlock()),
    ])

    class Meta:
        template = "streams/row_block.html"
        icon = "grip"
        label = "Page row"

if __name__ == "__main__":
    import __name__