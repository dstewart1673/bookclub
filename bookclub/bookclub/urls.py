from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('booktrading.urls')), #for now the only app is booktrading.  Once other apps are added, the general path will lead to an umbrella index page.
]
