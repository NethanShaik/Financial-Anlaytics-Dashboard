function SummaryCards({summary}){
    if(!summary) {
        return <p>Loading Summary...</p>;
    }
    return (
        <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-4">
            <div className="rounded-lg bg-white p-4 shadow">
                <h2 className="text-sm text-grey-500"> Total Income</h2>
                <p className="text-2xl font-bold">{summary.total_income}</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow">
                <h2 className="text-sm text-grey-500">Total Expense</h2>
                <p className="text-2xl font-bold">{summary.total_expense}</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow">
                <h2 className="text-sm text-gray-500">Net Profit</h2>
                <p className="text-2xl font-bold">${summary.net_profit}</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow">
                <h2 className="text-sm text-gray-500">Transactions</h2>
                <p className="text-2xl font-bold">{summary.transaction_count}</p>
            </div>
        </div>
    );
}
export default SummaryCards;