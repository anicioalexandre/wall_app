from django.urls import path
from .views import AddUserView

urlpatterns = [
    path("signup/", AddUserView.as_view(), name="add_user"),
]
