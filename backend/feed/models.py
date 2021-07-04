from django.db import models
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey("users.User", on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    content = models.TextField(max_length=140)
    up_vote = models.IntegerField(default=0)
    user_up_votes = models.ManyToManyField("users.User", related_name="user_up_votes", blank=True)

    class Meta:
        ordering = ["-created_at"]


class UserPostPreferences(models.Model):
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name="users")
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="posts")
