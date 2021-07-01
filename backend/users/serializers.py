from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

from users.models import User


class AddUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "user_name", "password", "is_active", "id"]
        extra_kwargs = {"password": {"write_only": True}}

    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )

    def create(self, validated_data):
        user = self.Meta.model(**validated_data)

        user.set_password(validated_data["password"])
        user.save()
        return user


class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "user_name", "is_active", "id"]
