from django.contrib import admin
from .models import Emotionproduct
# ,Wowproduct,Dislikeproduct
# Register your models here.


class EmotionproductAdmin(admin.ModelAdmin):
    
    # list_display = [field.attname for field in User._meta.fields]
    list_display = ['id', 'user','product','emotion','image', 'created_at']
    list_filter = ('user', 'product','emotion')
    
admin.site.register(Emotionproduct, EmotionproductAdmin)


    

# admin.site.register(Wowproduct)
# admin.site.register(Dislikeproduct)