import {useState, useEffect} from "react";
import {LineChart, Line,
        XAxis, YAxis,
        CartesianGrid, Tooltip,
        Legend, ResponsiveContainer} from "recharts";
import api from "../services/api.js";
import '../index.css';

function MonthlyCharts () {
        const [monthlyData, setmonthlyData] = useState([]);
        useEffect (()=>{
                const fetchData = async () => {
                        try {
                                const response = await api.get("/analytics/monthly_view/")
                                const rawData = response.data
                                const groupedData = {};
                                rawData.forEach((item) => {
                                    const month = item.month;
                                    if (!groupedData[month]){
                                        groupedData[month] = {
                                            month: month,
                                            income: 0,
                                            expense: 0,
                                        };
                                    }
                                    if (item.transaction_types === 'income') {
                                        groupedData[month].income = item.total;
                                    } else if (item.transaction_types === 'expense') {
                                        groupedData[month].expense = item.total;
                                    }
                                });
                                const formattedData = Object.values(groupedData).sort((a,b) =>
                                a.month.localeCompare(b.month));
                                setmonthlyData(formattedData)
                        } catch (error) {
                                console.log("Error fetching monthly data:", error)
                        }
                };
                fetchData();
        }, []);
        return (
            <div className="min-h-screen dashboard_background p-6">
                    <h1 className="ml-16 text-3xl font-bold"> Monthly Chart (Revenue vs Expense)</h1>
                    <ResponsiveContainer width = "100%" height = {300}>
                            <LineChart data = {monthlyData} className="mt-50 rounded-lg bg-white/50 backdrop-blur-lg p-4 shadow pt-10 pb-10">
                                <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey = "month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type = "monotone" dataKey="income" stroke="#00b894" />
                                    <Line type="monotone" dataKey="expense" stroke="#d63031" />
                            </LineChart>
                    </ResponsiveContainer>
            </div>
        );
}

export default MonthlyCharts;