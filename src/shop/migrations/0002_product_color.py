# Generated by Django 2.1.7 on 2019-03-13 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='color',
            field=models.CharField(default='white', max_length=100),
        ),
    ]