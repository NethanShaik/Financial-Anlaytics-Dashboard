# Finance Dashboard

A full-stack finance tracker for logging income/expense transactions and visualizing them by month and category.

- **Backend:** Django + Django REST Framework, PostgreSQL
- **Frontend:** React (Vite), Tailwind CSS, Recharts, React Router

## Features

- Log transactions (title, amount, type, category, date, description)
- Dashboard with total income, total expense, net profit, and transaction count
- Category-wise expense breakdown
- Monthly income vs. expense line chart

## Project Structure

```
backend/finance_dashboard/    Django project (finance + analytics apps)
frontend/finance_dashboard/   React (Vite) frontend
```

## Setup

### Backend

```bash
cd backend/finance_dashboard
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r ../requirements.txt
```

Create a PostgreSQL database, then copy `backend/.env.example` to `backend/.env` and fill in your own values:

```bash
cp ../.env.example ../.env
```

Run migrations and start the server:

```bash
python manage.py migrate
python manage.py runserver
```

API is served at `http://127.0.0.1:8000/api/`.

### Frontend

```bash
cd frontend/finance_dashboard
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## API Endpoints

| Method | Endpoint                                  | Description                  |
|--------|--------------------------------------------|-------------------------------|
| GET    | `/api/finance/transactions/`               | List transactions             |
| POST   | `/api/finance/transactions/`               | Create a transaction          |
| GET    | `/api/finance/transactions/<id>/`          | Retrieve a transaction        |
| PUT    | `/api/finance/transactions/<id>/`          | Update a transaction          |
| DELETE | `/api/finance/transactions/<id>/`          | Delete a transaction          |
| GET    | `/api/analytics/summary_view/`             | Income/expense/profit summary |
| GET    | `/api/analytics/monthly_view/`             | Monthly income vs. expense    |
| GET    | `/api/analytics/category_breakdown_view/`  | Expense totals by category    |

## Notes

This is a single-user demo app — there's no authentication layer, so anyone with API access can read/write all transactions. That's an intentional scope cut, not an oversight.
