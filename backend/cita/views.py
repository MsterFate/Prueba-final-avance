from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CitaSerializer  # Importa el serializador de Cita en lugar de Todo
from .models import Cita  # Importa el modelo Cita en lugar de Todo

# Create your views here.

class CitaView(viewsets.ModelViewSet):  # Cambia el nombre de la clase a CitaView
    serializer_class = CitaSerializer  # Usa el serializador de Cita en lugar de Todo
    queryset = Cita.objects.all()  # Usa el modelo Cita en lugar de Todo
