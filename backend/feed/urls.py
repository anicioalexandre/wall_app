from django.urls import path

from .views import FeedView, UpdateUpVoteView

urlpatterns = [
    path("vote/<int:pk>/", UpdateUpVoteView.as_view(), name="update_vote"),
    path("", FeedView.as_view(), name="get_feed"),
]
