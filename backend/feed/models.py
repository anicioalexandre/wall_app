from django.db import models
from django.utils import timezone


class Feed(models.Model):
    author = models.ForeignKey("users.User", on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    content = models.TextField(max_length=140)
    up_vote = models.IntegerField(default=0)

    class Meta:
        ordering = ["-created_at"]
