from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100, db_index=True)
    category = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    #updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True)

    

    def __str__(self):
        
        return (self.name,self.category,self.created_at)