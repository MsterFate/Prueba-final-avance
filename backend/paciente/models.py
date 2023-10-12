from django.db import models


class Paciente(models.Model):
    # Información Personal
    nombre = models.CharField(max_length=120, null=True, blank=True)
    apellido = models.CharField(max_length=120, null=True, blank=True)
    dni = models.CharField(max_length=20, null=True, blank=True)
    fecha_nacimiento = models.DateField(null=True, blank=True)
    genero = models.CharField(max_length=10, choices=[('masculino', 'Masculino'), ('femenino', 'Femenino'), ('otro', 'Otro')], null=True, blank=True)
    direccion = models.TextField(null=True, blank=True)
    telefono = models.CharField(max_length=15, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    altura = models.CharField(max_length=5, null=True, blank=True)
    peso = models.CharField(max_length=5, null=True, blank=True)
    edad = models.CharField(max_length=3, null=True, blank=True)

    # Información Médica
    tipo_sangre = models.CharField(max_length=5, choices=[('A', 'A'), ('B', 'B'), ('AB', 'AB'), ('O', 'O')])
    alergias = models.TextField(blank=True)
    medicamentos_actuales = models.TextField(blank=True)
    enfermedades_previas = models.TextField(blank=True)
    cirugias_previas = models.TextField(blank=True)
    medico_referente = models.CharField(max_length=120, blank=True)

    # Información de Contacto de Emergencia
    nombre_contacto_emergencia = models.CharField(max_length=120, blank=True)
    telefono_contacto_emergencia = models.CharField(max_length=15, blank=True)
    relacion_contacto_emergencia = models.CharField(max_length=50, blank=True)

    # Información Adicional
    fecha_ingreso = models.DateField(null=True, blank=True)
    seguro_medico = models.TextField(blank=True)
    observaciones = models.TextField(blank=True)
# Register your models here.

    def __str__(self):
        return f"{self.nombre} {self.apellido} - DNI: {self.dni}"