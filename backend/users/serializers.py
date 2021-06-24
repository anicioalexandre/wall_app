from rest_framework import serializers
from users.models import User


class AddUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['email', 'user_name', 'password', 'is_active', 'id']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
