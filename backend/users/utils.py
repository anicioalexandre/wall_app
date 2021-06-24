from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from six import text_type


class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
            text_type(user["is_active"])
            + text_type(user["id"])
            + text_type(timestamp)
        )


user_token = TokenGenerator()


class EmailHandler:
    def __init__(self, request, user):
        self.request = request
        self.user = user

    def send(self):
        hash_id = (urlsafe_base64_encode(force_bytes(self.user["id"])),)
        token = (user_token.make_token(self.user),)

        email_subject = "Activate your account"
        activate_url = f"http://localhost:3000/user/activate/{hash_id}/{token}"
        email_sender = "senderemail26@gmail.com"

        send_mail(
            email_subject,
            activate_url,
            email_sender,
            [self.user["email"]],
            fail_silently=False,
        )
