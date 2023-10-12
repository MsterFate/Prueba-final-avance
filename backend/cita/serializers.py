from rest_framework import serializers
from .models import Cita  # Importa el modelo Cita

class CitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cita  # Usa el modelo Cita
        fields = ('id', 'nombre_paciente', 'especialista_primario', 'especialista_secundario', 'descripcion', 'fecha_hora', 'estado')  # Incluye el campo 'estado' en los campos a serializar
