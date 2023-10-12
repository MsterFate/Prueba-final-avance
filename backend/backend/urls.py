"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from especialista import views as especialista_views  # Importa las vistas de la aplicación 'especialista'
from paciente import views as paciente_views  # Importa las vistas de la aplicación 'paciente'
from cita import views as cita_views  # Importa las vistas de la aplicación 'cita' o donde hayas definido la vista de Cita

router = routers.DefaultRouter()
router.register(r'especialistas', especialista_views.EspecialistaView, 'especialista')
router.register(r'pacientes', paciente_views.PacienteView, 'paciente')  # Registra la vista de Paciente
router.register(r'citas', cita_views.CitaView, 'cita')  # Registra la vista de Cita

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

