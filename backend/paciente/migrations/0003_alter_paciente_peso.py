# Generated by Django 4.2.5 on 2023-09-24 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paciente', '0002_paciente_edad_paciente_peso'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paciente',
            name='peso',
            field=models.CharField(blank=True, max_length=5, null=True),
        ),
    ]
