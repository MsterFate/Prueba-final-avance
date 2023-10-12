from django.contrib import admin
from .models import Especialista  # Importa el modelo Especialista en lugar de Todo

class EspecialistaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'especialidad', 'codigo_medico', 'numero_telefono', 'direccion')    # Define los campos que quieres mostrar en la lista

# Registra el modelo Especialista con su clase Admin correspondiente
admin.site.register(Especialista, EspecialistaAdmin)