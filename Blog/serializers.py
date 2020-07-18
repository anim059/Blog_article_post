from rest_framework import serializers
from Blog.models import Article

class BlogSerializer(serializers.ModelSerializer):
	class Meta:
		model=Article
		fields = ['id','title','content','active','pub_date']