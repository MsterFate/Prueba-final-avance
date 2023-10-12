from django.contrib import admin
from .models import Paciente  # Importa el modelo Paciente

class PacienteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'dni', 'fecha_nacimiento', 'genero', 'telefono', 'email', 'peso', 'edad')  # Puedes añadir o quitar campos según tus necesidades

# Register your models here.
admin.site.register(Paciente, PacienteAdmin)  # Registra el modelo Paciente con la configuración de PacienteAdmin
