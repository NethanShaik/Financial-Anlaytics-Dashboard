from django.db.models.functions import TruncMonth
from finance.models import Transactions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Sum

@api_view(['GET'])
def summary_view(request):
    total_income = Transactions.objects.filter(transaction_types='income').aggregate(total=Sum('amount'))['total'] or 0
    total_expense = Transactions.objects.filter(transaction_types='expense').aggregate(total=Sum('amount'))['total'] or 0
    transaction_count = Transactions.objects.count()
    net_profit = total_income - total_expense

    data = {
        'total_income': total_income,
        'total_expense': total_expense,
        'net_profit': net_profit,
        'transaction_count': transaction_count,
    }
    return Response(data)

@api_view(['GET'])
def monthly_view(request):
    monthly = (Transactions.objects.annotate(month=TruncMonth('transaction_date'))
               .values('month','transaction_types')
               .annotate(sum=Sum('amount'))
               .order_by('-month'))
    result = []
    for transaction in monthly:
        result.append({
            'month': transaction['month'].strftime('%Y-%m'),
            'transaction_types': transaction['transaction_types'],
            'total': transaction['sum']
        })
    return Response(result)

@api_view(['GET'])
def category_breakdown_view(request):
    categories = (((Transactions.objects.filter(transaction_types='expense')
                  .values('transaction_category'))
                  .annotate(sum=Sum('amount')))
                  .order_by('transaction_category'))
    return Response(list(categories))