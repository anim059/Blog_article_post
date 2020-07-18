from django.shortcuts import render, redirect
from django.utils.http import is_safe_url

from rest_framework.decorators import api_view
from rest_framework.response import Response
#from .forms import TweetForm
from ..models import Article
from ..serializers import (
BlogSerializer
)



@api_view(['GET'])
def BlogList(request, *args, **kwargs):
    qs = Article.objects.all()
    serializer = BlogSerializer(qs, many=True)
    return Response(serializer.data, status=200)

@api_view(['GET'])
def BlogDetails(request,pk):
    obj = Article.objects.filter(pk=pk)
    serializer = BlogSerializer(obj, many=True)
    return Response(serializer.data, status=200)


@api_view(['POST'])
def BlogCreate(request):
	serializer = BlogSerializer(data=request.data)
	if serializer.is_valid(raise_exception=True):
		serializer.save()
		return Response(serializer.data,status=201)
	return Response({},status=400)


@api_view(['POST'])
def BlogUpdate(request,pk):
	obj = Article.objects.get(pk=pk)
	serializer = BlogSerializer(data=request.data, instance=obj)
	if serializer.is_valid(raise_exception=True):
		serializer.save()
		return Response(serializer.data,status=200)
	return Response(serializer.data,status=400)



@api_view(['DELETE'])
def BlogDelete(request,pk):
	obj = Article.objects.get(pk=pk)
	obj.delete()
	return Response({},status=204)


	