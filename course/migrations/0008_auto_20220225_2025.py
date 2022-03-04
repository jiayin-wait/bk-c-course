# Generated by Django 2.2.6 on 2022-02-25 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0007_auto_20220223_2001'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='classroom',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name='班级'),
        ),
        migrations.AlterField(
            model_name='member',
            name='professional_class',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='专业'),
        ),
    ]
