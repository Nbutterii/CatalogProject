# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from shop.models import Product

from django.db import models
from django.contrib.auth.models import User
from django.core import validators
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
# from django.core.validators import RegexValidator

from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser,PermissionsMixin
)
#from django.utils.translation import gettext as _

from django.utils import timezone
import re

# from shop.models import Product




# Create your models here.
class UserManager(BaseUserManager):

  def _create_user(self, username, email, password, is_staff, is_superuser, **extra_fields):   #address before extrafield
    now = timezone.now()
    if not username:
      raise ValueError(_('The given username must be set'))
    email = self.normalize_email(email)
    user = self.model(username=username, email=email,
             is_staff=is_staff, is_active=True,
             is_superuser=is_superuser, last_login=now,
             date_joined=now, 
             # address=address, 
             **extra_fields)
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_user(self, username, email=None, password=None, **extra_fields):
    return self._create_user(username, email, password, False, False, True,
                 **extra_fields)

  def create_superuser(self, username, email, password, **extra_fields):
    user=self._create_user(username, email, password, True, True,
                 **extra_fields)
    user.is_active=True
    user.save(using=self._db)
    return user


class User(AbstractBaseUser, PermissionsMixin):
  username = models.CharField(_('username'), max_length=30, unique=True,
    help_text=_('Required. 30 characters or fewer. Letters, numbers and @/./+/-/_ characters'),
    validators=[
      validators.RegexValidator(re.compile('^[\w.@+-]+$'), _('Enter a valid username.'), _('invalid'))
    ])
  first_name = models.CharField(_('first name'), max_length=30, blank=True, null=True)
  last_name = models.CharField(_('last name'), max_length=30, blank=True, null=True)
  email = models.EmailField(_('email address'), max_length=255, unique=True)
  is_staff = models.BooleanField(_('staff status'), default=False,
    help_text=_('Designates whether the user can log into this admin site.'))
  is_active = models.BooleanField(_('active'), default=True,
    help_text=_('Designates whether this user should be treated as active. Unselect this instead of deleting accounts.'))
  date_joined = models.DateTimeField(_('date joined'), default=timezone.now)
  #receive_newsletter = models.BooleanField(_('receive newsletter'), default=False)
  birth_date = models.DateField(_('birth date'), auto_now=False, null=True)
#   address = models.CharField(_('address'), max_length=30, blank=True, null=True)
#   phone_regex = validators.RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
#   phone_number = models.CharField(_('phone number'), validators=[phone_regex], max_length=30, blank=True, null=True) # validators should be a list

  USER_TYPES = (
    ('Client', 'Client'),
    ('Owner', 'Owner'),
    )
  user_type = models.CharField(_('user type'), choices=USER_TYPES, max_length=30, blank=True, null=True)

  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['email']

  # myproduct = models.ForeignKey(Product,)
  # Happyproduct = models.ForeignKey(Product, blank=True,on_delete=models.SET_NULL,null=True)

  objects = UserManager()

  class Meta:
    verbose_name = _('user')
    verbose_name_plural = _('users')

  def get_full_name(self):
    full_name = '%s %s' % (self.first_name, self.last_name)
    return full_name.strip()

  def get_short_name(self):
    return self.first_name

  def email_user(self, subject, message, from_email=None):
    send_mail(subject, message, from_email, [self.email])