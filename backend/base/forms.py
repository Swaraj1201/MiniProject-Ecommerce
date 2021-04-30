from django import forms
class SubscriberForm(forms.ModelForm)

    class Meta:
        model = Subscriber
        widgets = {
            'password': forms.PasswordInput(),
        }