from django.urls import path

from .views import FeedView, AddVUpVoteView, RemoveUpVoteView

urlpatterns = [
    path("remove_vote/<int:pk>/", RemoveUpVoteView.as_view(), name="remove_vote"),
    path("add_vote/<int:pk>/", AddVUpVoteView.as_view(), name="add_vote"),
    path("", FeedView.as_view(), name="get_feed"),
]
