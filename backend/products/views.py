from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from backend.products.models import Products
from backend.products.serializers import ProductsSerializer


# Create your views here.
class ProductViewSet(ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer