from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EspecialistaSerializer  # Importa EspecialistaSerializer en lugar de TodoSerializer
from .models import Especialista  # Importa el modelo Especialista en lugar de Todo

# Create your views here.

class EspecialistaView(viewsets.ModelViewSet):
    serializer_class = EspecialistaSerializer  # Usa EspecialistaSerializer en lugar de TodoSerializer
    queryset = Especialista.objects.all()  # Usa Especialista.objects.all() en lugar de Todo.objects.all()
