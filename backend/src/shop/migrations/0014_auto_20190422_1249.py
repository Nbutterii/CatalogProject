# Generated by Django 2.1.5 on 2019-04-22 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0013_remove_product_happy'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='total_Dislike',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='product',
            name='total_Happy',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='product',
            name='total_Wow',
            field=models.IntegerField(default=0),
        ),
    ]