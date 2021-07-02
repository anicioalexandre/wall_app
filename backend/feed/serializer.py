from rest_framework import serializers

from feed.models import Feed


class FeedSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.user_name')

    class Meta:
        model = Feed
        fields = ["author", "created_at", "content", "up_vote", "id"]
