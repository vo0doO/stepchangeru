# Generated by Django 3.0.3 on 2020-03-13 15:39

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0015_auto_20200313_1818'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='content',
            field=wagtail.core.fields.StreamField([('banner', wagtail.core.blocks.StructBlock([])), ('cta', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(help_text='Image from call to action. If need.', required=False)), ('title', wagtail.core.blocks.CharBlock(max_length=50, required=True)), ('text', wagtail.core.blocks.RichTextBlock(required=True)), ('button_page', wagtail.core.blocks.PageChooserBlock(required=False)), ('button_url', wagtail.core.blocks.URLBlock(required=False)), ('button_text', wagtail.core.blocks.CharBlock(default='Узнать больше', max_length=40, required=True))])), ('row', wagtail.core.blocks.StructBlock([('row', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('html_attr_id', wagtail.core.blocks.CharBlock(help_text='id in html tag attr', max_length=10, required=False)), ('html_attr_class', wagtail.core.blocks.CharBlock(help_text='Css class. Set style', max_length=10, required=False)), ('paragraph', wagtail.core.blocks.RichTextBlock(required=False)), ('button', wagtail.core.blocks.StructBlock([('button_page', wagtail.core.blocks.PageChooserBlock(help_text='First link', required=False)), ('button_url', wagtail.core.blocks.URLBlock(help_text='Last link', required=False))], required=False)), ('card', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(help_text='Add your title', required=True)), ('cards', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('title', wagtail.core.blocks.CharBlock(max_length=40, required=True)), ('text', wagtail.core.blocks.TextBlock(max_length=200, required=True)), ('button_page', wagtail.core.blocks.PageChooserBlock(required=False)), ('button_url', wagtail.core.blocks.URLBlock(help_text='', required=False))])))], required=False)), ('cta', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(help_text='Image from call to action. If need.', required=False)), ('title', wagtail.core.blocks.CharBlock(max_length=50, required=True)), ('text', wagtail.core.blocks.RichTextBlock(required=True)), ('button_page', wagtail.core.blocks.PageChooserBlock(required=False)), ('button_url', wagtail.core.blocks.URLBlock(required=False)), ('button_text', wagtail.core.blocks.CharBlock(default='Узнать больше', max_length=40, required=True))], required=False)), ('title_and_text_block', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(help_text='Add your Title', required=True)), ('text', wagtail.core.blocks.TextBlock(help_text='Add additional text', required=True))], required=False)), ('banner', wagtail.core.blocks.StructBlock([], required=False))])))]))], blank=True, null=True),
        ),
        migrations.DeleteModel(
            name='HomePageBanner',
        ),
    ]
