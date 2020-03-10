from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock
from django.db import models
from wagtail.core.fields import RichTextField, StreamField
from wagtail.images.models import Image
import blog


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
    title = blocks.CharBlock(required=True, help_text="Add your title")

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
        icon = "placeholder"
        label = "Card Block"


class RichtextBlock(blocks.RichTextBlock):
    html_attr_id = blocks.CharBlock(max_length=10, required=False, help_text="id in html tag attr"),
    html_attr_class = blocks.CharBlock(max_length=10, required=False, help_text="Css class. Set style"),
    class Meta:
        template = "streams/richtext_block.html"
        icon = "doc-full"
        label = "Full RichText"


class SimpleRichtextBlock(blocks.RichTextBlock):
    def __init__(self, required=True, help_text=None, editor='default', validators=(), **kwargs):
        super().__init__(**kwargs)
        self.features = [
            "bold",
            "italic",
            "link"
        ]

    html_attr_id = blocks.CharBlock(max_length=10, required=False, help_text="id in html tag attr"),
    html_attr_class = blocks.CharBlock(max_length=10, required=False, help_text="Css class. Set style"),
    class Meta:
        template = "streams/richtext_block.html"
        icon = "edit"
        label = "Simple RichText"


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
        icon = "placeholder"
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
    button_page = blocks.PageChooserBlock(required=False, help_text='First link')
    button_url = blocks.URLBlock(required=False, help_text='Last link')

    # def get_context(self, request, *args, **kwargs):
    #     context = super().get_context(request, *args, **kwargs)
    #     context['latest_posts'] = blog.models.BlogDetailPage.objects.live().public()[:3]
    #     return context

    class Meta:
        template = "streams/button_block.html"
        icon = "placeholder"
        label = "Single button"
        value_class = ButtonLinkStructValue


class BannerBlock(blocks.StructBlock):
    # TODO: изменить с фиелд на блок
    banner = blocks.StructBlock(
        banner_title = blocks.RichTextBlock(max_length=100, blank=False,null=True),
        banner_subtitle = blocks.RichTextBlock(features=["bold", "italic"],default=""),
        banner_image = models.ForeignKey(Image,on_delete=models.SET_NULL,null=True,blank=False,related_name="+"),
        banner_cta = models.ForeignKey("wagtailcore.Page",models.SET_NULL,null=True,blank=False,related_name="+"),
        content = StreamField([("cta", CTABlock(reversed=False)),], null=True, blank=True,),
    )
    class Meta:
        template = "streams/button_block.html"
        icon = "placeholder"
        label = "Banner"
        value_class = ButtonLinkStructValue

class RowBlock(blocks.StructBlock):
    """Row form home page"""
    row = blocks.ListBlock(
        blocks.StructBlock(
            [
            ("html_attr_id",blocks.CharBlock(max_length=10, required=False, help_text="id in html tag attr")),
            ("html_attr_class",blocks.CharBlock(max_length=10, required=False, help_text="Css class. Set style")),
            ("paragraph",blocks.RichTextBlock(required=False)),
            ("button",ButtonBlock(required=False)),
            ("card",CardBlock(required=False)),
            ("cta",CTABlock(required=False)),
            ("title_and_text_block",TitleAndTextBlock(required=False)),
            ("banner", BannerBlock(required=False)),
            ]
        )
    )

    class Meta:
        template = "streams/button_block.html"
        icon = "placeholder"
        label = "Page row"
        value_class = ButtonLinkStructValue

if __name__ == "__main__":
    import __name__