# Generated by Django 4.2.5 on 2023-09-24 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('especialista', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='especialista',
            name='direccion',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='especialista',
            name='numero_telefono',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='especialista',
            name='apellido',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AlterField(
            model_name='especialista',
            name='codigo_medico',
            field=models.CharField(blank=True, max_length=20, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='especialista',
            name='especialidad',
            field=models.CharField(blank=True, choices=[('PSI', 'Psicólogos'), ('TER', 'Terapia ocupacional'), ('FON', 'Fonoaudiología'), ('PSIPE', 'Psicopedagogía'), ('PSIQ', 'Psiquiatría'), ('MAS', 'Masoterapia'), ('TC', 'Terapias complementarias'), ('NUT', 'Nutricionistas'), ('BIO', 'Biodanza')], max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='especialista',
            name='nombre',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
    ]
