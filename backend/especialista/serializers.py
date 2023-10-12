from rest_framework import serializers
from .models import Especialista  # Importa el modelo Especialista en lugar de Todo

class EspecialistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especialista  # Usa el modelo Especialista en lugar de Todo
        fields = ('id', 'nombre', 'apellido', 'especialidad', 'codigo_medico', 'numero_telefono', 'direccion')  # Define los campos del modelo Especialista que quieres serializar