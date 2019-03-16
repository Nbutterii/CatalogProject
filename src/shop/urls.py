from django.urls import path,include

from shop import views
from rest_framework import routers


#app_name = 'product'
# app_name will help us do a reverse look-up latter.


router = routers.DefaultRouter()
router.register(r'product', views.ProductViewSet)

urlpatterns = router.urls