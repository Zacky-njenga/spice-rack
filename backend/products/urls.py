from rest_framework.routers import DefaultRouter

from backend.products.views import ProductViewSet

router = DefaultRouter()
router.register('products', ProductViewSet)

urlpatterns = router.urls