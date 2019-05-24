from rest_framework import serializers
from .models import Emotionproduct
# ,Wowproduct,Dislikeproduct
from accounts.models import User
from shop.models import Product
from shop.serializer import ProductSerializer

EMOTION_TYPES = (('Happy', 'Happy'),('Wow', 'Wow'),('Dislike', 'Dislike'),   )

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

            file_name = str(uuid.uuid4())
            # [:12] # 12 characters are more than enough.
            file_extension = self.get_file_extension(file_name, decoded_file)
            complete_file_name = "%s.%s" % (file_name, file_extension, )
            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension

        return extension



class EmotionSerializer(serializers.ModelSerializer):
    emotion = serializers.ChoiceField(
    choices=(('Happy', 'Happy'),('Wow', 'Wow'),('Dislike', 'Dislike'),),
    style={'base_template': 'radio.html'},
    required=True, write_only=True)

    
    class Meta:
        model = Emotionproduct
        fields = 'user','product','emotion'


class EmotionImgSerializer(serializers.ModelSerializer):
    # emotion = serializers.ChoiceField(
    # choices=(('Happy', 'Happy'),('Wow', 'Wow'),('Dislike', 'Dislike'),),
    # style={'base_template': 'radio.html'},
    # required=True, write_only=True)

    image = Base64ImageField(max_length=None, use_url=True)
    # image = serializers.FileField(max_length=None,use_url=True)
    
    class Meta:
        model = Emotionproduct
        fields = 'user','product','image'