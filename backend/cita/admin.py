from django.contrib import admin
from .models import Cita  # Importa el modelo Cita en lugar de Todo

class CitaAdmin(admin.ModelAdmin):
    list_display = ('nombre_paciente', 'especialista_primario', 'especialista_secundario', 'descripcion', 'fecha_hora')
    # Ajusta los campos que quieres mostrar en el panel de administración de Django

# Register your models here.
admin.site.register(Cita, CitaAdmin)  # Registra el modelo Cita en lugar de Todo
