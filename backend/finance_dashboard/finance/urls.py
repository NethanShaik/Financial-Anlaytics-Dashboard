from django.urls import path
from .views import api_transaction, api_transaction_detail

urlpatterns = [
    path('transactions/', api_transaction, name='api_transaction'),
    path('transactions/<int:pk>/', api_transaction_detail, name='api_transaction_detail'),
]