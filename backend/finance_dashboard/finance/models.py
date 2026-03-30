from django.db import models

class Transactions(models.Model):
    transaction_modes = [
        ('income','Income'),
        ('expense','Expense'),
    ]

    category_choices = [
        ('sales','Sales'),
        ('operations','Operations'),
        ('payroll','Payroll'),
        ('assets','Assets'),
    ]

    title = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_types = models.CharField(max_length=10, choices=transaction_modes)
    transaction_category = models.CharField(max_length=10, choices=category_choices)
    transaction_date = models.DateField()
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
