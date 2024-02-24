from rest_framework import generics
from .serializers import PlayerSerializer , ProfileSerializer
from django.contrib.auth.models import User
from .models import Profile

class PlayerList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = PlayerSerializer

class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = PlayerSerializer

class ProfileList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer    


