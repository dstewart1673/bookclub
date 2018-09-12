from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse

def index(request):
    return render(request, 'booktrading/base.html')

def browse(request):
    return render(request, 'booktrading/browse.html')

def details(request, book_id):
    return render(request, 'booktrading/detail.html', {'book':book_id})

def addbook(request):
    return render(request, 'booktrading/addbook.html')

def notfound(request):
    return render(request, 'booktrading/notfound.html')

def login(request):
    return render(request, 'booktrading/login.html')
