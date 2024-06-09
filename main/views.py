from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def HomePage(request):
    return render(request, 'main/home.html')

def aboutGay(request):
    return HttpResponse("<h4>Флэча\nФамилия:Пержу\nИмя:Павел\nВозраст:Неизвестно</h4>")
