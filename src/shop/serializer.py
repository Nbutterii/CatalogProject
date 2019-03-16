from rest_framework import serializers
from .models import Product


# class ProductSerializer(serializers.Serializer):

#     name = serializers.CharField(max_length=100)
#     description = serializers.CharField(max_length=100)
#     price = serializers.DecimalField(max_digits=10, decimal_places=2)
#     category = serializers.CharField(max_length=100)
#     image = serializers.ImageField()
#     #owner_id = serializers.IntegerField()



#     def create(self, validated_data):
#         return Product.objects.create(**validated_data)

#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name', instance.name)
#         instance.description = validated_data.get('description', instance.description)
#         instance.price = validated_data.get('price', instance.body)
#         instance.category = validated_data.get('category', instance.category)
#         #instance.author_id = validated_data.get('author_id', instance.author_id)
#         instance.image = validated_data.get('image', instance.image)


#         instance.save()
#         return instance

class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Product
        fields = 'id', 'image', 'name', 'category', 'color', 'price', 'description' 