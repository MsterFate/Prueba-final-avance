from rest_framework import viewsets
from .models import Paciente
from .serializers import PacienteSerializer

class PacienteView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()