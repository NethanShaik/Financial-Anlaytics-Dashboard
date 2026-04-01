import { useState, useEffect} from "react";
import api from "../services/api.js";
import SummaryCards from "../components/SummaryCards.jsx";
import TransactionsTable from "../components/TransactionsTable.jsx";
import CategoryBreakdown from "../components/CategoryBreakdown.jsx";

function Dashboard() {
    const [summary, setSummary] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetchSummary();
        fetchTransactions();
        fetchCategories();
    }, []);

    const fetchSummary = async () => {
        try{
            const response = await api.get("/analytics/summary_view/");
            setSummary(response.data);
        } catch (error) {
            console.error("Error fetching summary:",error);
        }
    };

    const fetchTransactions = async() => {
        try{
            const response = await api.get("/finance/transactions/");
            setTransactions(response.data);
        } catch (error) {
            console.error("Error fetching transactions:",error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await api.get("/analytics/category_breakdown_view/");
            setCategory(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    return(
        <div className="min-h-screen bg-grey-100 p-6">
            <h1 className="mb-5 text-3xl font-bold">Financial Dashboard</h1>
            <SummaryCards summary={summary}/>
            <TransactionsTable transactions={transactions}/>
            <CategoryBreakdown categories={category}/>
        </div>
    );
}

export default Dashboard;