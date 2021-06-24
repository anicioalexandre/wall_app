from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


class UserManager(BaseUserManager):
    def create_superuser(
        self, email, user_name, first_name, password, **other_fields
    ):

        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)
        other_fields.setdefault("is_active", True)

        if other_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if other_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(
            email, user_name, first_name, password, **other_fields
        )

    def create_user(
        self, email, user_name, first_name, password, **other_fields
    ):

        if not email:
            raise ValueError(_("You must provide an email address"))

        if not user_name:
            raise ValueError(_("You must provide an user name"))

        email = self.normalize_email(email)
        user = self.model(
            email=email,
            user_name=user_name,
            first_name=first_name,
            **other_fields
        )
        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email addresss"), unique=True)
    user_name = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=100)
    start_date = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(
        verbose_name="date joined", auto_now_add=True
    )
    last_login = models.DateTimeField(
        verbose_name="last login", auto_now_add=True
    )

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["user_name", "first_name"]

    def __str__(self):
        return self.user_name
