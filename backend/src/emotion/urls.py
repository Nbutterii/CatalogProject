from django.urls import path,include
from .views import Emotion,Emotionimage,Unemotion
# from shop.views import Createproduct
from rest_framework import routers


urlpatterns = [

    path('express/', Emotion.as_view(),name='Emotionproduct'),
    path('img/',Emotionimage.as_view(),name='Emotionimg'),
    path('cancel/',Unemotion.as_view(),name='Unemotion')

] 

# url(r'^post-love/$', views.PostLoveView.as_view(), name='post_love'),
