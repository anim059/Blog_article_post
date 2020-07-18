from django.urls import path

from .views import ArticleListView, ArticleCreateView, ArticleDetailView, ArticleUpdateView, ArticleYearArchiveView,PublisherDetail


app_name = 'articles'
urlpatterns = [
    path('', ArticleListView.as_view(), name='article-list'),
    path('create/', ArticleCreateView.as_view(), name='article-create'),
    path('<slug:slug>/', ArticleDetailView.as_view(), name='article-detail'),
    path('update/<slug:slug>/', ArticleUpdateView.as_view(), name='article-update'),
    path('year/<int:year>/',ArticleYearArchiveView.as_view(),name="article_year_archive"),
   path('publisher/detail/',PublisherDetail.as_view(),name="publisher_detail")

]