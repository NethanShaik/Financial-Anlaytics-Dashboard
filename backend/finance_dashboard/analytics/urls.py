from django.urls import path
from .views import summary_view, monthly_view, category_breakdown_view

urlpatterns = [
    path('summary_view/', summary_view, name='summary_view'),
    path('monthly_view/', monthly_view, name='monthly_view'),
    path('category_breakdown_view/', category_breakdown_view, name='category_breakdown_view'),
]