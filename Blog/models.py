from django.db import models
from django.urls import reverse

class Article(models.Model):
	title   = models.CharField(max_length=120)
	content = models.TextField()
	active  = models.BooleanField(default=True)
	pub_date = models.DateField(auto_now_add=True)
	def __str__(self):
		return self.title
	class Meta:
		ordering = ['-id']

