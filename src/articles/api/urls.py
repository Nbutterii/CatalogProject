from django.conf.urls import url,include

from .views import ArticleListView,ArticleDetailView

urlpatterns = [
    url('', ArticleListView.as_view()),
    url('<pk>', ArticleDetailView.as_view()),
]