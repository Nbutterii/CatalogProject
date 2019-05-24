from django.db import models
from accounts.models import User
from shop.models import Product
from accounts.models import User
from djreact import settings
from django.db.models import F
# Create your models here.
# class Emotion(models.Model):

#     # User = models.ForeignKey(User, related_name='emotion',on_delete=models.CASCADE)
#     User = models.ForeignKey(settings.AUTH_USER_MODEL,db_column="username",related_name='user_emotion',on_delete=models.CASCADE)
#     Product = models.ForeignKey(Product, related_name='product_emotion',on_delete=models.CASCADE)

#     EMOTION_TYPES = (('Happy', 'Happy'),('Wow', 'Wow'),('Dislike', 'Dislike'),   )
#     emotion = models.CharField(_('emotion'), choices=EMOTION_TYPES, max_length=30, blank=True, null=True)
#     created = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
        
#         return (self.User,self.Product,self.emotion)

class Emotionproduct(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, related_name='Happyuserproduct',on_delete=models.SET_NULL,null=True)
    product = models.ForeignKey(Product, related_name='emopro',on_delete=models.SET_NULL,null=True)

    EMOTION_TYPES = (('Happy', 'Happy'),('Wow', 'Wow'),('Dislike', 'Dislike'),   )
    emotion = models.CharField(('emotion'), choices=EMOTION_TYPES, max_length=30, blank=True, null=True)
    
    # total_happy = models.IntegerField(default=0)
    image = models.ImageField(upload_to='emotions/%Y_%m_%d', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return '{0}'.format(self.product.name)




# class Wowproduct(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, related_name='Wowuserproduct',on_delete=models.SET_NULL,null=True)
#     product = models.ForeignKey(Product,on_delete=models.SET_NULL,null=True, related_name='Wowproduct')
#     total_wow = models.IntegerField(default=0)
#     created_at = models.DateTimeField(auto_now_add=True)
    
#     def __str__(self):
#         return '{0}'.format(self.product.name)


# class Dislikeproduct(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, related_name='Dislikeuserproduct',on_delete=models.SET_NULL,null=True)
#     product = models.ForeignKey(Product, on_delete=models.SET_NULL,null=True, related_name='Dislikeproduct')
#     total_dislike = models.IntegerField(default=0)
#     created_at = models.DateTimeField(auto_now_add=True)
    

#     def __str__(self):
#         return '{0}'.format(self.product.name)


# class PostLove(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, related_name='postlovesAsUser')
#     post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='postlovesAsPost')
#     total_loves = models.IntegerField(default=0)

#     def __str__(self):
#         return '{0}'.format(self.post.title)
