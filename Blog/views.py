from django.http import HttpResponseForbidden
from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, FormView, CreateView, DetailView, UpdateView
from django.views.generic.detail import SingleObjectMixin
from django.views.generic.edit import FormMixin
from django.views.generic.dates import YearArchiveView
from .forms import ArticleModelForm,AuthorInterestForm
from .models import Article

# Create your views here.
class ArticleListView(ListView):
	template_name = 'articles/article_list.html'
	model = Article
	queryset = Article.objects.all()
	paginate_by = 1  # if pagination is desired

	def get_context_data(self, **kwargs):
		context = super().get_context_data(**kwargs)
		return context


class ArticleCreateView(CreateView):
	template_name = 'articles/article_create.html'
	form_class = ArticleModelForm
	queryset = Article.objects.all()
	success_url = '/Blog'
	def form_valid(self, form):
		print(form.cleaned_data)
		return super().form_valid(form)

class ArticleDetailView(DetailView):
	template_name = 'articles/article_detail.html'
	model = Article

	def get_object(self):
		id_ = self.kwargs.get('slug')
		return get_object_or_404(Article, id=id_)

class ArticleUpdateView(UpdateView):
	template_name = 'articles/article_create.html'
	form_class = ArticleModelForm

	def get_object(self):
		id_ = self.kwargs.get('slug')
		return get_object_or_404(Article, id=id_)

	def form_valid(self, form):
		print(form.cleaned_data)
		return super().form_valid(form)

class ArticleYearArchiveView(YearArchiveView):
	template_name = 'articles/article_archive_year.html'
	queryset = Article.objects.all()
	date_field = "pub_date"
	make_object_list = True
	allow_future = True
	template_name_suffix = '_archive_year'

class PublisherDetail(SingleObjectMixin, ListView):
    paginate_by = 2
    template_name = "articles/publisher_detail.html"


    def get(self, request, *args, **kwargs):
        self.object = self.get_object(queryset=Article.objects.all())
        return super().get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['publisher'] = self.object
        return context

    def get_queryset(self):
        return Article.object.all()

