function CategoryBreakdown({categories = []}){
    return (
        <div className="rounded-lg bg-white/50 backdrop-blur-lg p-4 shadow">
            <h2 className="mb-4 text-xl font-semibold">Category Breakdown</h2>
            <ul className="list-none space-y-2 p-0 m-0">
                {categories.length === 0 ? (
                    <li className="text-gray-400 p-3">No categories found.</li>
                ) : categories.map((item,index)=> (
                    <li
                    key={index}
                    className="flex items-center justify-between rounded backdrop-blur-md bg-gray/50 p-3">
                        <span>{item.transaction_category}</span>
                        <span className="font-semibold">${item.sum}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryBreakdown;