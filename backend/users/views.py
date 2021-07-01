from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import (
    AddUserSerializer,
    GetUserSerializer
)
from .utils import EmailHandler
from .models import User


class AddUserView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format="json"):
        serializer = AddUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            if user:
                user_json = serializer.data

                EmailHandler(request, user_json).send()

                return Response(user_json, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetUserView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = GetUserSerializer
