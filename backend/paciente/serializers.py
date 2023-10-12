from rest_framework import serializers
from .models import Paciente  # Importa el modelo Paciente

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente  # Usa el modelo Paciente
        fields = (
            'id', 'nombre', 'apellido', 'dni', 'fecha_nacimiento', 'genero',
            'direccion', 'telefono', 'email', 'altura', 'peso', 'edad',
            'tipo_sangre', 'alergias', 'medicamentos_actuales', 'enfermedades_previas',
            'cirugias_previas', 'medico_referente', 'nombre_contacto_emergencia',
            'telefono_contacto_emergencia', 'relacion_contacto_emergencia',
            'fecha_ingreso', 'seguro_medico', 'observaciones'
        )  # Define los campos del modelo Paciente que quieres serializar