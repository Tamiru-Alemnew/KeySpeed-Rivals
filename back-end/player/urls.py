from django.urls import path , include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('players/', views.PlayerList.as_view()),
    path('players/<int:pk>/', views.PlayerDetail.as_view()),
    path('profiles/', views.ProfileList.as_view()),
    path('profiles/<int:pk>/', views.ProfileDetail.as_view()),
]