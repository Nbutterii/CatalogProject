from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,viewsets
from .serializer import ProductSerializer
from .models import Product
# import django_filters.rest_framework
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated,DjangoModelPermissionsOrAnonReadOnly,AllowAny
from rest_framework import permissions
from rest_framework.filters import SearchFilter, OrderingFilter

from rest_framework.decorators import action
from django.shortcuts import get_list_or_404, get_object_or_404
from accounts.models import User


class Createproduct(APIView):
    pass
#    
    # def delete(self, request):
    # # Get object with this pk
    #     product = Product.objects.all()
    #     product.delete()
    #     return Response({"message": "product with id `{}` has been deleted."})

class CountModelMixin(object):
    """
    Count a queryset.
    """
    @action(detail=False)
    def count(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        # content = {'Products': queryset.count()}
        content = queryset.count()
        return Response(content)

class WowModelMixin(object):

    @action(detail=False)
    def mywow(self, request, *args, **kwargst):
        user = request.user
        queryset = Product.objects.filter(emopro__emotion='Wow',emopro__user=user)
        # .filter(emopro__user=user)
        content = int(queryset.count())
        # print(hprod)
        if queryset:
            serializer = self.get_serializer(queryset, many=True)
            serializer_data = serializer.data
            return Response(serializer_data)
            # return Response(serializer_data)
        else:
            return Response({ 'data' : 'You dont WOW anything'},status = status.HTTP_200_OK)

    


# Employer.objects.values('id').annotate(jobtitle_count=Count('jobtitle')).order_by('-jobtitle_count')[:5]

class OwnerPermission(permissions.BasePermission):
       
    def has_permission(self, request, view):

        if not request.user.is_authenticated:
            if view.action in ['update', 'partial_update', 'destroy', 'create']:
                return False
            else:
                return True

        elif request.user.is_authenticated:
            if view.action in ['update', 'partial_update', 'destroy', 'create']:
                return request.user and request.user.user_type == 'Owner' 
            else:
                return True
     
      
        

class ProductViewSet(viewsets.ModelViewSet,CountModelMixin,WowModelMixin):

    __basic_fields = ('name', 'category', 'color','price','created_at')
    # permission_classes = (DjangoModelPermissionsOrAnonReadOnly,)
    permission_classes = (OwnerPermission,)
    
    queryset = Product.objects.all().order_by('-id')
    serializer_class = ProductSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    # filterset_fields = ('category',)
    filter_fields = ( 'category', 'color','emopro__emotion','created_at')
    search_fields = __basic_fields
    ordering_fields = '__all__'
    # ordering_fields = ('total_score')

    # .list(), .retrieve(), .create(), .update(), .partial_update(), and .destroy().
    @action(detail=False)
    def topall(self, request, *args, **kwargst):
        
        queryset = self.filter_queryset(self.get_queryset())
        
        pro = self.paginate_queryset(queryset)
        
        if pro is not None:
            serializer = self.get_serializer(pro, many=True)
            serializer_data = serializer.data
            sorted_serializer_data = sorted(serializer_data, key=lambda x: x['total_score'],reverse=True)
            return self.get_paginated_response(sorted_serializer_data)

        serializer = self.get_serializer(queryset, many=True)
        serializer_data = serializer.data
        sorted_serializer_data = sorted(serializer_data, key=lambda x: x['total_score'],reverse=True)
        return Response(sorted_serializer_data)
        
    @action(detail=False)
    def top5(self, request, *args, **kwargst):
        queryset = self.filter_queryset(self.get_queryset())
       
        
        pro = self.paginate_queryset(queryset)
        
        if pro is not None:
            serializer = self.get_serializer(pro, many=True)
            serializer_data = serializer.data
            sorted_serializer_data = sorted(serializer_data, key=lambda x: x['total_score'],reverse=True)[:5]
            return self.get_paginated_response(sorted_serializer_data)

        serializer = self.get_serializer(queryset, many=True)
        serializer_data = serializer.data
        sorted_serializer_data = sorted(serializer_data, key=lambda x: x['total_score'],reverse=True)[:5]
        return Response(sorted_serializer_data)
        

    @action(detail=False)
    def myhappy(self, request, *args, **kwargst):
        user = request.user
        queryset = Product.objects.filter(emopro__emotion='Happy',emopro__user=user)
        # queryset = Product.objects.all()[:5]
        # Photo.objects.filter(tags__name='holiday').filter(tags__name='summer')
        # hprod = queryset.count()
        if queryset:
            serializer = self.get_serializer(queryset, many=True)
            serializer_data = serializer.data
            return Response(serializer_data)
        else:
            return Response({'data' : 'You dont Happy anything'},status = status.HTTP_200_OK)
        # sorted_serializer_data = sorted(serializer_data, key=lambda x: x['total_score'],reverse=True)[:5]

    # @action(detail=False)
    # def happyall(self, request, *args, **kwargst):
    #     queryset = self.filter_queryset(self.get_queryset())
    #     queryset2 = queryset.filter(emopro__emotion='Happy')
    #     # queryset = Product.objects.all()[:5]
    #     # Photo.objects.filter(tags__name='holiday').filter(tags__name='summer')
    #     # hprod = queryset.count()
    #     if queryset2:
    #         # serializer = self.get_serializer(queryset, many=True) 
    #         # serializer_data = serializer.data
    #         Happy = queryset2.count()
    #         return Response(Happy)
    #     else:
    #         return Response('No Happy Product')
    
    # @action(detail=False)
    # def wowall(self, request, *args, **kwargst):
    #     queryset = self.filter_queryset(self.get_queryset())
    #     queryset2 = queryset.filter(emopro__emotion='Wow')
    #     # queryset = Product.objects.all()[:5]
    #     # Photo.objects.filter(tags__name='holiday').filter(tags__name='summer')
    #     # hprod = queryset.count()
    #     if queryset2:
    #         # serializer = self.get_serializer(queryset, many=True) 
    #         # serializer_data = serializer.data
    #         Wow = queryset2.count()
    #         return Response(Wow)
    #     else:
    #         return Response('No Happy Product')

    # @action(detail=False)
    # def dislikeall(self, request, *args, **kwargst):
    #     queryset = self.filter_queryset(self.get_queryset())
    #     queryset2 = queryset.filter(emopro__emotion='Dislike')
    #     # queryset = Product.objects.all()[:5]
    #     # Photo.objects.filter(tags__name='holiday').filter(tags__name='summer')
    #     # hprod = queryset.count()
    #     if queryset2:
    #         # serializer = self.get_serializer(queryset, many=True) 
    #         # serializer_data = serializer.data
    #         Dislike = queryset2.count()
    #         return Response(Dislike)
    #     else:
    #         return Response('No Happy Product')
        
    @action(detail=False)
    def emotionall(self, request, *args, **kwargst):
        queryset = self.filter_queryset(self.get_queryset())
        Happy = queryset.filter(emopro__emotion='Happy').count()
        Wow = queryset.filter(emopro__emotion='Wow').count()
        Dislike = queryset.filter(emopro__emotion='Dislike').count()
        # queryset = Product.objects.all()[:5]
        # Photo.objects.filter(tags__name='holiday').filter(tags__name='summer')
        # hprod = queryset.count()
        data = {
            'Happy' : Happy,
            'Wow' : Wow,
            'Dislike' : Dislike
        }
        return Response(data)
        
    # @action(detail=False)
    # def mywow(self, request, *args, **kwargst):
    #     user = request.user
    #     queryset = Product.objects.filter(emopro__emotion='Wow',emopro__user=user)
    #     # .filter(emopro__user=user)
    #     content = {'Products': queryset.count()}
    #     # print(hprod)
    #     if queryset:
    #         serializer = self.get_serializer(queryset, many=True)
    #         serializer_data = serializer.data
    #         return Response(serializer_data)
    #         # return Response(serializer_data)
    #     else:
    #         return Response('You dont WOW anything')

        
    


        # product.emopro.filter(product=product,emotion='Happy').coun
    # @action(detail=False)
    # def myhappy(self, request, *args, **kwargst):
    #     user = request.user
    #     queryset = Product.objects.filter(emopro__user=user).filter(emopro__emotion='Happy')
    #     # queryset = Product.objects.all()[:5]
    #     # Photo.objects.filter(tags__name='holiday').filter(tags__name='summer')

    #     serializer = self.get_serializer(queryset, many=True)
    #     serializer_data = serializer.data
    #     # sorted_serializer_data = sorted(serializer_data, key=lambda x: x['total_score'],reverse=True)[:5]
    #     return Response(serializer_data)


# def list(self, request, *args, **kwargs):
#     queryset = self.filter_queryset(self.get_queryset())

#     page = self.paginate_queryset(queryset)
#     if page is not None:
#         serializer = self.get_serializer(page, many=True)
#         serializer_data = serializer.data
#         sorted_serializer_data = sorted(serializer_data, key=lambda x: x['count_need'])
#         return self.get_paginated_response(sorted_serializer_data)

#     serializer = self.get_serializer(queryset, many=True)
#     serializer_data = serializer.data
#     sorted_serializer_data = sorted(serializer_data, key=lambda x: x['count_need'])
#     return Response(sorted_serializer_data)