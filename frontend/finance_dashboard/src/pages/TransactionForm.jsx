import {useState} from "react";
import api from '../services/api.js';

function TransactionForm({onTransactionAdded}) {
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        transaction_types: "expense",
        transaction_category: "operations",
        transaction_date: "",
        description: "",
    });
    const [success, setSuccess] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    function handleChange(event) {
        let {name, value} = event.target;
        if (name === "transaction_types" || name === "transaction_category") {
            value = value.toLowerCase();
        }
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setError("");
        console.log("Submitting formData:", formData);
        try{
            await api.post("/finance/transactions/", formData);
            setFormData({
                title: "",
                amount: "",
                transaction_types: "",
                transaction_category: "",
                transaction_date: "",
                description: "",
            });
            onTransactionAdded?.();
            setSuccess("Added Transaction Successfully");
        } catch (err) {
            console.log("Error adding transactions", err.response.data);
            setError("Failed to add Transaction.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen dashboard_background p-6">
            <h1 className="ml-16 text-3xl font-bold"> Transaction Form</h1>
            <div className="mb-5 mt-20 rounded-lg bg-white/50 backdrop-blur-lg p-4 shadow">
                <form onSubmit={handleSubmit}  style= {{display:"grid", gap:"1rem"}}>

                    <input
                        type = "text"
                        name = "title"
                        placeholder = "Title"
                        value = {formData.title}
                        onChange={handleChange}
                    />

                    <input
                        type = "number"
                        name = "amount"
                        placeholder = "Amount"
                        value = {formData.amount}
                        onChange={handleChange}
                    />

                    <select
                        name = "transaction_types"
                        placeholder = "Transaction Types"
                        value = {formData.transaction_types}
                        onChange={handleChange}
                    >
                        <option value = "income"> Revenue </option>
                        <option value = "expense"> Expense </option>
                    </select>

                    <select
                        name = "transaction_category"
                        placeholder = "Transaction Category"
                        value = {formData.transaction_category}
                        onChange={handleChange}
                    >
                        <option value = "sales"> Sales </option>
                        <option value = "operations"> Operations </option>
                        <option value = "payroll"> Payroll </option>
                        <option value = "assets"> Assets </option>
                    </select>

                    <input
                        type="date"
                        name="transaction_date"
                        value={formData.transaction_date}
                        onChange = {handleChange}
                    />

                    <textarea
                        name = "description"
                        placeholder="Decription"
                        value={formData.description}
                        onChange = {handleChange}
                        rows="4"
                    />
                    <div className="flex justify-center">
                        <button type="submit"
                                className="w-fit px-3 py-1.5 text-black font-semibold
                                rounded-2xl backdrop-blur-lg border border-white/30
                                shadow-lg hover:scale-105 transition">
                            {loading ? "Saving...":"Log Transaction"}
                        </button>
                    </div>
                    {success && <p style={{color:"green"}}>{success}</p>}
                    {error && <p style={{color:"red"}}>{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default TransactionForm;