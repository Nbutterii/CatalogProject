from django.contrib import admin
from .models import Product
# Register your models here.



class ProductAdmin(admin.ModelAdmin):
    
    # list_display = [field.attname for field in User._meta.fields]
    list_display = ['id', 'image1','image2','image3','image4', 'name', 'category', 'color', 'price','Owner']
    list_filter = ('category','color')
    
admin.site.register(Product, ProductAdmin)