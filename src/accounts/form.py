# from django import forms
# from django.contrib.auth.models import User
# from django.contrib.auth.forms import UserCreationForm, UserChangeForm

# from accounts.models import User


# class RegistrationForm(UserCreationForm):

#     username = forms.CharField(required=True)
#     email = forms.EmailField(required=False)

#     user_type = forms.ChoiceField(
#     choices=(('Client', 'Client'),('Owner', 'Owner')),required=True)

#     #*******


#     password1 = forms.CharField()
#     password2 = forms.CharField()


    
#     def validate_username(self, username):
#         username = get_adapter().clean_username(username)
#         return username

#     def validate_email(self, email):
#         email = get_adapter().clean_email(email)
#         if allauth_settings.UNIQUE_EMAIL:
#             if email and email_address_exists(email):
#                 raise serializers.ValidationError(
#                     _("A user is already registered with this e-mail address."))
#         return email

#     def validate_password1(self, password):
#         return get_adapter().clean_password(password)

#     def validate(self, data):
#         if data['password1'] != data['password2']:
#             raise serializers.ValidationError(_("The two password fields didn't match."))
#         return data

#     def custom_signup(self, request, user):
#         pass

#     def get_cleaned_data(self):
#         return {
#             'username': self.validated_data.get('username', ''),
#             'password1': self.validated_data.get('password1', ''),
#             'user_type': self.validated_data.get('user_type', ''), #5555555555555555555555555
#             'email': self.validated_data.get('email', '') 
#         }

#     def save(self, request):
#         adapter = get_adapter()
#         user = adapter.new_user(request)
#         self.cleaned_data = self.get_cleaned_data()
#         adapter.save_user(request, user, self)
#         self.custom_signup(request, user)
#         setup_user_email(request, user, [])
#         return user