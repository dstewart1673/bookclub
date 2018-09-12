from django.db import models

class Author(models.Model):
    author_name = models.CharField(max_length=200)

class Genre(models.Model):
    genre_type = models.CharField(max_length=30)

class Review(models.Model):
    review_text = models.TextField(max_length=1000)
    review_author = models.CharField(max_length=50)
    rating = models.IntegerField()

class Book(models.Model):
    title_text = models.CharField(max_length=200)
    owner_email = models.EmailField()
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
    genre = models.ForeignKey(Genre, on_delete=models.PROTECT)
    reviews = models.ManyToManyField(Review)
