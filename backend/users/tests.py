from django.test import TestCase
from django.contrib.auth import get_user_model


class UserTests(TestCase):

    EMAIL_TEST = 'tester@email.com'
    USER_NAME_TEST = 'tester94'
    FIRST_NAME_TEST = 'Tester'
    PASSWORD_TEST = 'test1234'

    def test_new_user(self):

        db = get_user_model()
        user = db.objects.create_user(
            self.EMAIL_TEST,
            self.USER_NAME_TEST,
            self.FIRST_NAME_TEST,
            self.PASSWORD_TEST
        )

        self.assertEqual(user.email, self.EMAIL_TEST)
        self.assertEqual(user.user_name, self.USER_NAME_TEST)
        self.assertEqual(user.first_name, self.FIRST_NAME_TEST)
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_staff)
        self.assertTrue(user.is_active)
        self.assertEqual(str(user), self.USER_NAME_TEST)

        # raises an error when email is not passed:
        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email='',
                user_name=self.USER_NAME_TEST,
                first_name=self.FIRST_NAME_TEST,
                password=self.PASSWORD_TEST,
                is_superuser=True
            )

        # raises an error when user_name is not passed:
        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email=self.EMAIL_TEST,
                user_name='',
                first_name=self.FIRST_NAME_TEST,
                password=self.PASSWORD_TEST,
                is_superuser=True
            )

    def test_new_adminuser(self):

        db = get_user_model()
        admin_user = db.objects.create_superuser(
            self.EMAIL_TEST,
            self.USER_NAME_TEST,
            self.FIRST_NAME_TEST,
            self.PASSWORD_TEST
        )

        self.assertEqual(admin_user.email, self.EMAIL_TEST)
        self.assertEqual(admin_user.user_name, self.USER_NAME_TEST)
        self.assertEqual(admin_user.first_name, self.FIRST_NAME_TEST)
        self.assertTrue(admin_user.is_superuser)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_active)
        self.assertEqual(str(admin_user), self.USER_NAME_TEST)

        # raises an error when is_superuser is not false:
        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email=self.EMAIL_TEST,
                user_name=self.USER_NAME_TEST,
                first_name=self.FIRST_NAME_TEST,
                password=self.PASSWORD_TEST,
                is_superuser=False
            )

        # raises an error when is_staff is not false:
        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email=self.EMAIL_TEST,
                user_name=self.USER_NAME_TEST,
                first_name=self.FIRST_NAME_TEST,
                password=self.PASSWORD_TEST,
                is_staff=False
            )
