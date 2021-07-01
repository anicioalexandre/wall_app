from django.urls import path
from .views import AddUserView, GetUserView

urlpatterns = [
    path("<int:pk>/", GetUserView.as_view(), name="add_user"),
    path("signup/", AddUserView.as_view(), name="add_user"),
]
