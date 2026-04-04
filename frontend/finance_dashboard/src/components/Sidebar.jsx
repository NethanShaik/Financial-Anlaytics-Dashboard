function Sidebar ({isOpen}) {
    return (
        <div className="m-64 backdrop-blur-lg bg-grey/50 text-black min-h-screen p-5 transition-all duration-300">
            <h2 className="text-xl font-bold mb-6">Menu</h2>

            <ul className="space-y-4">
                <li className="cursor-pointer hover:text-black">Dashboard</li>
                <li className="cursor-pointer hover:text-black">Monthly Chart</li>
            </ul>
        </div>
    );
}

export default Sidebar;