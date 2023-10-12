from django.db import models
from paciente.models import Paciente  # Asegúrate de importar correctamente el modelo Paciente
from especialista.models import Especialista  # Asegúrate de importar correctamente el modelo Especialista

class Cita(models.Model):
    ESTADOS_CITA = [
        ('programada', 'Programada'),
        ('completada', 'Completada'),
        ('cancelada', 'Cancelada'),
        ('cambiada', 'Cambiada'),
    ]
    nombre_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    especialista_primario = models.ForeignKey(Especialista, related_name='citas_primarias', on_delete=models.CASCADE)
    especialista_secundario = models.ForeignKey(Especialista, related_name='citas_secundarias', null=True, blank=True, on_delete=models.SET_NULL)
    descripcion = models.TextField(blank=True, null=True)  # Campo de descripción
    fecha_hora = models.DateTimeField()  # Campo de fecha y hora de la cita
    estado = models.CharField(max_length=10, choices=ESTADOS_CITA, default='programada')  # Campo para el estado de la cita
    
    def __str__(self):
        return f"Cita: {self.nombre_paciente} - Fecha y Hora: {self.fecha_hora} - Primario: {self.especialista_primario} - Secundario: {self.especialista_secundario or 'Ninguno'} - Estado: {self.estado or 'Pendiente'}"
