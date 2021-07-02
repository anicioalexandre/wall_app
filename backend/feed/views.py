from rest_framework import status
from rest_framework.permissions import (
    IsAuthenticatedOrReadOnly,
    IsAuthenticated,
)
from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializer import FeedSerializer
from .models import Feed


class FeedView(ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Feed.objects.all()
    serializer_class = FeedSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# class DecreaseVote():
#     def decrease(self, post):


class UpdateUpVoteView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = FeedSerializer

    def put(self, request, pk):
        vote = self.request.data["vote"]
        feed_post = Feed.objects.get(id=pk)
        if vote is True:
            feed_post.up_vote += 1
        if vote is False:
            feed_post.up_vote -= 1
        serializer = FeedSerializer(
            feed_post, data={"feed_post": feed_post}, partial=True
        )
        if serializer.is_valid():
            feed_post.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
