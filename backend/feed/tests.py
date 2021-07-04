from django.urls import reverse
from rest_framework import status, test, exceptions

from .models import Post
from users.models import User


class FeedTests(test.APITestCase):
    get_create_post_url = reverse("get_feed")
    update_up_vote_url = reverse("update_vote", kwargs={"pk": 1})

    # the user can see posts without being logged
    def test_get_posts_on_feed_unlogged(self):
        self.tester = User.objects.create_user(
            "sirtester@test.com", "tester", "Sir Tester", "sirtester94"
        )
        Post.objects.create(author_id=2, content="Some cool post.")
        response = self.client.get(self.get_create_post_url, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["content"], "Some cool post.")

    # the user can create posts while being logged
    def test_create_post_when_logged(self):
        self.tester = User.objects.create_superuser(
            email="sirtester2@test.com",
            user_name="tester2",
            first_name="sir tester",
            password="12a345aa6789",
        )

        self.client.force_authenticate(user=self.tester)
        data = {
            "content": "Another cool post.",
        }

        response = self.client.post(
            self.get_create_post_url, data, format="json"
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["author"], "tester2")
        self.assertEqual(response.data["content"], "Another cool post.")

    # the user can't create posts while being unlogged
    def test_cant_create_post_when_unlogged(self):
        data = {
            "content": "Not so cool post.",
        }

        response = self.client.post(
            self.get_create_post_url, data, format="json"
        )

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(
            response.data,
            {
                "detail": exceptions.ErrorDetail(
                    string="Authentication credentials were not provided.",
                    code="not_authenticated",
                )
            },
        )
