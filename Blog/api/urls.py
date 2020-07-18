from django.urls import path, include
from .views import (
   BlogList,BlogDetails,BlogCreate,BlogUpdate,BlogDelete )



urlpatterns = [

path('list/',BlogList),
path('create/',BlogCreate),
path('detail/<int:pk>',BlogDetails),
path('update/<int:pk>',BlogUpdate),
path('delete/<int:pk>',BlogDelete)

]