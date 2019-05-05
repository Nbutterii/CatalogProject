from rest_framework.views import APIView,View
from rest_framework.response import Response
from rest_framework import status,viewsets

from .models import Emotionproduct
# ,Wowproduct,Dislikeproduct
# import django_filters.rest_framework
# from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated,DjangoModelPermissionsOrAnonReadOnly,AllowAny
# # from rest_framework import permissions
# from rest_framework.filters import SearchFilter, OrderingFilter

# from rest_framework.decorators import action
# from django.shortcuts import render
from .serializers import EmotionSerializer,EmotionImgSerializer
# ,WowSerializer,DislikeSerializer
from django.shortcuts import get_list_or_404, get_object_or_404
# Create your views here.
from shop.models import Product
from django.db.models import F

# 0: -4593 images- Angry
# 1: -547 images- Disgust
# 2: -5121 images- Fear
# 3: -8989 images- Happy
# 4: -6077 images- Sad
# 5: -4002 images- Surprise
# 6: -6198 images- Neutral


class Emotion(APIView):

    serializer_class = EmotionSerializer
    queryset =  Emotionproduct.objects.all()
    # .order_by('-id')
    permission_classes = (IsAuthenticated,)
    
    def post(self, request):

        product_id = request.data['product_id']
        emotion = request.data['emotion']
        product = get_object_or_404(Product, id=product_id)
        user = request.user
        if Emotionproduct.objects.filter(product=product, user=user):
            
            Emotionproduct.objects.filter(user=user, product=product ).delete()
            data = 'unemotion'
            Emotionproduct.objects.create(user=user, product=product,emotion=emotion)
            data = {'newemotion': emotion}

        else:
            
            Emotionproduct.objects.create(user=user, product=product,emotion=emotion)
            data = 'emotion'

        return Response(data,status=status.HTTP_200_OK)

class Unemotion(APIView):

    serializer_class = EmotionSerializer
    queryset =  Emotionproduct.objects.all()
    
    permission_classes = (IsAuthenticated,)
    
    def post(self, request):

        product_id = request.data['product_id']
        # emotion = request.data['emotion']
        product = get_object_or_404(Product, id=product_id)
        user = request.user
        Emotionproduct.objects.filter(user=user, product=product ).delete()
        data = 'unemotion'
      
        return Response(data,status=status.HTTP_200_OK)
       
class Emotionimage(APIView):

    serializer_class = EmotionImgSerializer
    queryset =  Emotionproduct.objects.all()
    # .order_by('-id')
    permission_classes = (IsAuthenticated,)
    
    def post(self, request):
        
        import cv2
        from keras.models import load_model
        import numpy as np
        import base64

        from keras import backend as K

        from emotion.emotiondetection.utils.datasets import get_labels
        from emotion.emotiondetection.utils.inference import detect_faces
        from emotion.emotiondetection.utils.inference import draw_text
        from emotion.emotiondetection.utils.inference import draw_bounding_box
        from emotion.emotiondetection.utils.inference import apply_offsets
        from emotion.emotiondetection.utils.inference import load_detection_model
        from emotion.emotiondetection.utils.inference import load_image
        from emotion.emotiondetection.utils.preprocessor import preprocess_input

        
        #gradient
        from emotion.emotiondetection.utils.grad_cam import compile_gradient_function
        from emotion.emotiondetection.utils.grad_cam import compile_saliency_function
        from emotion.emotiondetection.utils.grad_cam import register_gradient
        from emotion.emotiondetection.utils.grad_cam import modify_backprop
        from emotion.emotiondetection.utils.grad_cam import calculate_guided_gradient_CAM


        task = 'emotion'


        product_id = request.data['product_id']
        image = request.data['image']
        product = get_object_or_404(Product, id=product_id)
        user = request.user

        print(len(image))
        # image = base64.decodestring(image64)

        detection_model_path = 'emotion/emotiondetection/trained_models/detection_models/haarcascade_frontalface_default.xml'
        emotion_model_path = 'emotion/emotiondetection/trained_models/emotion_models/fer2013_mini_XCEPTION.102-0.66.hdf5'
        emotion_labels = get_labels('fer2013')
        
        emotion_offsets = (20, 40)
        emotion_offsets = (0, 0)

        # loading models
        face_detection = load_detection_model(detection_model_path)
        emotion_classifier = load_model(emotion_model_path, compile=False)
        

        # getting input model shapes for inference
        emotion_target_size = emotion_classifier.input_shape[1:3]
        

        # loading images
        rgb_image = load_image(image,grayscale=False)
        # print(rgb_image)
        gray_image = load_image(image, grayscale=True)
        gray_image = np.squeeze(gray_image)
        gray_image = gray_image.astype('uint8')

        faces = detect_faces(face_detection, gray_image)
        elabel = ''
        for face_coordinates in faces:
            # global elabel

            x1, x2, y1, y2 = apply_offsets(face_coordinates, emotion_offsets)
            gray_face = gray_image[y1:y2, x1:x2]

            try:
                
                gray_face = cv2.resize(gray_face, (emotion_target_size))
            except:
                continue

            

            gray_face = preprocess_input(gray_face, True)
            gray_face = np.expand_dims(gray_face, 0)
            gray_face = np.expand_dims(gray_face, -1)
            emotion_label_arg = np.argmax(emotion_classifier.predict(gray_face))
            emotion_text = emotion_labels[emotion_label_arg]


            #gradient
            predicted_class = np.argmax(model.predict(gray_face))
            label_text = labels[predicted_class]

            gradient_function = compile_gradient_function(model,
                                    predicted_class, 'conv2d_7')
            register_gradient()
            guided_model = modify_backprop(model, 'GuidedBackProp', task)
            saliency_function = compile_saliency_function(guided_model, 'conv2d_7')

            guided_gradCAM = calculate_guided_gradient_CAM(gray_face,
                                gradient_function, saliency_function)
            guided_gradCAM = cv2.resize(guided_gradCAM, (x2-x1, y2-y1))
            rgb_guided_gradCAM = np.repeat(guided_gradCAM[:, :, np.newaxis], 3, axis=2)
            rgb_image[y1:y2, x1:x2, :] = rgb_guided_gradCAM
            draw_bounding_box((x1, y1, x2 - x1, y2 - y1), rgb_image, color)
            #gradient

            # print(emotion_text)
            elabel = emotion_text


        bgr_image = cv2.cvtColor(rgb_image, cv2.COLOR_RGB2BGR)
        cv2.imwrite('/home/Documents/surprise/'+image+'.jpg', bgr_image)

        K.clear_session()
        
        if elabel in {'surprise'}:
            emotion = 'Wow'
        elif elabel in {'happy','neutral'}:
            emotion = 'Happy'
        elif elabel in {'angry','disgust','fear','sad'}:
            emotion = 'Dislike'
        else:
            emotion = 'null'
            
        print(emotion)
        if emotion == 'null':
            data = 'Can not find your face'

        else:
            if Emotionproduct.objects.filter(product=product, user=user):
            
                Emotionproduct.objects.filter(user=user, product=product ).delete()
                # data = 'unemotion'
                Emotionproduct.objects.create(user=user, product=product,emotion=emotion)
                data = {'newemotion': emotion}

            else:
            
                Emotionproduct.objects.create(user=user, product=product,emotion=emotion)
                data = {'emotion': emotion}

        return Response(data,status=status.HTTP_200_OK) 




