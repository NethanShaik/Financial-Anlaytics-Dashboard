function TransactionsTable({transactions = []}) {
    return (
        <div className="mb-5 rounded-lg bg-white/50 backdrop-blur-lg p-4 shadow">
            <h2 className="mb-4 text-xl font-semibold">Transactions</h2>
            <table className="w-full border-collapse">
                <thead>
                <tr className="border-b text-left">
                    <th className="p-2">Title</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Category</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Description</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((txn) => (
                    <tr key={txn.id} className="border-b">
                        <td className="p-2">{txn.title}</td>
                        <td className="p-2">{txn.amount}</td>
                        <td className="p-2">{txn.transaction_types}</td>
                        <td className="p-2">{txn.transaction_category}</td>
                        <td className="p-2">{txn.transaction_date}</td>
                        <td className="p-2">{txn.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionsTable;