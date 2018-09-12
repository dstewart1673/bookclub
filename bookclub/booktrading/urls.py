from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.browse, name='browse'),
    path('books/<int:book_id>', views.details, name='details'),
    path('books/new', views.addbook, name='addbook'),
    path('login', views.login, name='login'),
]
