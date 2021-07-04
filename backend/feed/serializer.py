from rest_framework import serializers

from .models import Post


class FeedSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source="author.user_name")

    class Meta:
        model = Post
        fields = [
            "author",
            "created_at",
            "content",
            "up_vote",
            "id",
            "user_up_votes"
        ]

    def get_validation_exclusions(self):
        exclusions = super(FeedSerializer, self).get_validation_exclusions()
        return exclusions + ['user_up_votes']
