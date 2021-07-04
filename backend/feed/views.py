from abc import abstractmethod
from rest_framework import status
from rest_framework.permissions import (
    IsAuthenticatedOrReadOnly,
    IsAuthenticated,
)
from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializer import FeedSerializer
from .models import Post, UserPostPreferences


class FeedView(ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Post.objects.all()
    serializer_class = FeedSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class BaseUpVote:
    @abstractmethod
    def change_up_vote(self, post):
        pass

    def save_up_vote(self, pk, user):
        print(user)
        feed_post = self.change_up_vote(Post.objects.get(id=pk), user)
        feed_post.save()


class RemoveUpVote(BaseUpVote):
    def change_up_vote(self, post, user):
        # preferences = UserPostPreferences.objects.get(user=user, post=post)
        preferences = UserPostPreferences.objects.filter(
            user=user.id, post=post
        )
        preferences.delete()

        post.user_up_votes.remove(user)
        post.up_vote -= 1
        return post


class AddUpVote(BaseUpVote):
    def change_up_vote(self, post, user):
        preferences = UserPostPreferences(user=user, post=post)
        preferences.save()

        post.user_up_votes.add(user)
        post.up_vote += 1
        return post


class AddVUpVoteView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        try:
            AddUpVote().save_up_vote(pk, request.user)
            return Response(status=status.HTTP_200_OK)
        except (Exception):
            return Response(status=status.HTTP_400_BAD_REQUEST)


class RemoveUpVoteView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        try:
            RemoveUpVote().save_up_vote(pk, request.user)
            return Response(status=status.HTTP_200_OK)
        except (Exception):
            return Response(status=status.HTTP_400_BAD_REQUEST)
