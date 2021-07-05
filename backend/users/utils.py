from django.core.mail import send_mail


class EmailHandler:
    def __init__(self, request, user):
        self.request = request
        self.user = user

    def send(self):
        email_subject = "Welcome to Wall App!"
        message = f"Dear user, welcome! Go ahead and access the app here: http://localhost:3030/"
        email_sender = "senderemail26@gmail.com"

        send_mail(
            email_subject,
            message,
            email_sender,
            [self.user["email"]],
            fail_silently=False,
        )
