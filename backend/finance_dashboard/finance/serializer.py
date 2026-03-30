from rest_framework import serializers
from .models import Transactions

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions
        fields = ('id',
                  'title',
                  'amount',
                  'transaction_types',
                  'transaction_category',
                  'transaction_date',
                  'description')