from django import forms

from .models import Article


class ArticleModelForm(forms.ModelForm):
    class Meta:
        model = Article
        fields =[
            'title',
            'content',
            'active',
        ]

class AuthorInterestForm(forms.Form):
    title = forms.CharField()