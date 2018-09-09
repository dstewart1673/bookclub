from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse

def index(request):
    return HttpResponse("You're at the main page")

def browse(request):
    return HttpResponse("You're at the available books browsing page")

def details(request, book_id):
    return HttpResponse("You're at the page for book %s." % book_id)

def addbook(request):
    return HttpResponse("You're at the page to add a book")
