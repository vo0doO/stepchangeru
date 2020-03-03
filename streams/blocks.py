from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class TitleAndTextBlock(blocks.StructBlock):

    title = blocks.CharBlock(required=True, help_text='Add your Title')
    text = blocks.TextBlock(required=True, help_text='Add additional text')

    class Meta:
        template = "streams/title_and_text_block.html"
        icon = "edit"
        lable = "Title & Text"


class CardBlock(blocks.StructBlock):

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
        label = "Staff Cards"   


class RichtextBlock(blocks.RichTextBlock):
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
    
    class Meta:
        template = "streams/richtext_block.html"
        icon = "edit"
        label = "Simple RichText"


