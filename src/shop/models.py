from django.db import models

# from emotion.models import Happyproduct
from djreact import settings


class Product(models.Model):

    # user_id = model.ForeignKey(User)

    name = models.CharField(max_length=100, db_index=True, blank=True)
    category = models.CharField(max_length=100, blank=True)
    color = models.CharField(max_length=100, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    #updated_at = models.DateTimeField(auto_now=True)
    image1 = models.ImageField(upload_to='products/%Y_%m_%d', blank=True)
    image2 = models.ImageField(upload_to='products/%Y_%m_%d', blank=True)
    image3 = models.ImageField(upload_to='products/%Y_%m_%d', blank=True)
    image4 = models.ImageField(upload_to='products/%Y_%m_%d', blank=True)
    # image1 = models.ImageField(upload_to='products/%Y_%m_%d', blank=True)
    
    Owner = models.ForeignKey(settings.AUTH_USER_MODEL,db_column="username",related_name='products',on_delete=models.CASCADE,blank=True,null=True)
    
    

    

    # def __str__(self):
               
    #     return (self.name,self.category,self.created_at)