from django.contrib import admin
from django.urls import path, include
from.import views ##означает . что ипортировать из этой папки

urlpatterns = [
    path('', views.HomePage, name='homepage'),
    path('aboutflescha', views.aboutGay)
]