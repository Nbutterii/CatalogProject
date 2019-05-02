from rest_framework import serializers
from .models import Product
import base64
from emotion.models import Emotionproduct

from django.core.files.base import ContentFile
# from accounts.serializers import UserSerializer

# class Base64ImageField(serializers.ImageField):
#     def from_native(self, data):
#         if isinstance(data, basestring) and data.startswith('data:image'):
#             # base64 encoded image - decode
#             format, imgstr = data.split(';base64,')  # format ~= data:image/X,
#             ext = format.split('/')[-1]  # guess file extension

#             data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)

#         return super(Base64ImageField, self).from_native(data)
# class Base64ImageField(serializers.ImageField):
#     def from_native(self, data):
#         data = ContentFile(base64.b64decode(imgstr), name='Product.')

#         return super(Base64ImageField, self).from_native(data)

class Base64ImageField(serializers.ImageField):

    def to_internal_value(self, data):
        from django.core.files.base import ContentFile
        import base64
        import six
        import uuid

        if isinstance(data, six.string_types):
            if 'data:' in data and ';base64,' in data:
                header, data = data.split(';base64,')

            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('invalid_image')

            file_name = str(uuid.uuid4())[:12] # 12 characters are more than enough.
            file_extension = self.get_file_extension(file_name, decoded_file)
            complete_file_name = "%s.%s" % (file_name, file_extension, )
            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension

        return extension
  


class ProductSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=100)
    category = serializers.CharField(max_length=100)
    color = serializers.CharField(max_length=100)
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    description = serializers.CharField()
    
    #updated_at = serializers.DateTimeField(auto_now=True)
    image1 = Base64ImageField(max_length=None, use_url=True)
    image2 = Base64ImageField(max_length=None, use_url=True)
    image3 = Base64ImageField(max_length=None, use_url=True)
    image4 = Base64ImageField(max_length=None, use_url=True)

    Owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    # emopro = serializers.StringRelatedField(many=True)

    total_Happy = serializers.SerializerMethodField(read_only=True)
    total_Wow = serializers.SerializerMethodField(read_only=True)
    total_Dislike = serializers.SerializerMethodField(read_only=True)


    total_score = serializers.SerializerMethodField(read_only=True)
    

    def get_total_Happy(self, product):
        return product.emopro.filter(product=product,emotion='Happy').count()

    def get_total_Wow(self, product):
        return product.emopro.filter(product=product,emotion='Wow').count()

    def get_total_Dislike(self, product):
        return product.emopro.filter(product=product,emotion='Dislike').count()


    def get_total_score(self,product):
        Happy = product.emopro.filter(product=product,emotion='Happy').count()
        Wow = product.emopro.filter(product=product,emotion='Wow').count()
        Dislike = product.emopro.filter(product=product,emotion='Dislike').count()    
        score = (Happy + (2*Wow))-Dislike
        return score

    
    class Meta:
        model = Product
        
        fields = 'id', 'image1','image2','image3','image4', 'name', 'category', 'color', 'price', 'description','Owner','total_Happy','total_Wow','total_Dislike','total_score','created_at'
        
        # ordering = ['total_score']
    # def create(self, validated_data):
    #     created_by_data = validated_created_by.pop('')
    #     Product = Product.objects.create(**validated_data)
    #     for created_by in created_by_data:
    #         created_by.objects.create(Product=Product, **created_by)
    #     return event

# class GetLanguageSerializer(serializers.ModelSerializer):
#     technology = serializers.StringRelatedField(many=True)
#     frameworks = serializers.StringRelatedField(many=True)

#     total_technology = serializers.SerializerMethodField(read_only=True)
#     toatl_frameworks = serializers.SerializerMethodField(read_only=True)

#     def get_toatl_frameworks(self, language):
#         return language.frameworks.count()

#     def get_total_technology(self, language):
#         return language.technology.count() # change 'technology' with corresponding "related_name" value

#     class Meta:
#         model = Language
#         fields = (other_fileds, 'total_technology', 'toatl_frameworks')
#         depth = 1
