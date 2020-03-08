from django.db import models

# Create your models here.
class Subscriber(models.Model):

    email = models.CharField(max_length=100, blank=False, null=False, help_text="Subscribers email")
    full_name = models.CharField(max_length=100, blank=False, null=False)

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Subscriber"
        verbose_name_plural = "Subscribers"