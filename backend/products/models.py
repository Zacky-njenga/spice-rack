from django.db import models
from rest_framework.fields import IntegerField


# Create your models here.
class Products(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.URLField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    rating = models.FloatField(default=0)
    reviews = models/IntegerField(default=0)
    shop = models.CharField(max_length=100)
    free_shipping = models.BooleanField(default=False)

    def __str__(self):
        return self.title