from django.contrib import admin

from .models import User
# Register your models here.



class UserAdmin(admin.ModelAdmin):
    
    # list_display = [field.attname for field in User._meta.fields]
    list_display = ['id','username','email','user_type']
    list_filter = ('user_type',)
    
admin.site.register(User, UserAdmin)