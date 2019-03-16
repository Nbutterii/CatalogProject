from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,viewsets
from .serializer import ProductSerializer
from .models import Product


# class ProductList(APIView):

#     def get(self,request):
#         products = Product.objects.all()
#         serializer = ProductSerializer(products,many=True)
#         return Response({"products": serializer.data})

#     def post(self,request):
#         product = request.data.get('product')

#         serializer = ProductSerializer(data=product)
#         if serializer.is_valid(raise_exception=True):
#             product_saved = serializer.save()
#         return Response({"success": "Product '{}' created successfully".format(product_saved.title)})


#     def delete(self, request, pk):
#     # Get object with this pk
#         product = get_object_or_404(Article.objects.all(), pk=pk)
#         product.delete()
#         return Response({"message": "product with id `{}` has been deleted.".format(pk)},status=204)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-date')
    serializer_class = ProductSerializer   


