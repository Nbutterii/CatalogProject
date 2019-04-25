from django.urls import path,include
from shop import views
# from shop.views import Createproduct
from rest_framework import routers


#app_name = 'product'
# app_name will help us do a reverse look-up latter.


router = routers.DefaultRouter()
router.register(r'product', views.ProductViewSet)

urlpatterns = [
    #path('createproduct/', Createproduct.as_view(),name='createproduct'),
    # path('Happy/<int:pk>/', views.Happycreate.as_view(),name='Happyproduct'),


] + router.urls


# urlpatterns = [
#     path('product/',ProductList.as_view(),name='product'),


# ]