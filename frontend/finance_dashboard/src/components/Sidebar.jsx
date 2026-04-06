function Sidebar ({isOpen}) {
    return (
        <div className={`fixed top-0 left-0 z-50 h-screen overflow-hidden bg-gray-200/30 text-black shadow-lg backdrop-blur-lg transition-all duration-300 z-50${isOpen ? "w-50 p-6":"w-0 p-0"}`}>
            {isOpen && (
                <>
                    <h2 className="text-xl font-bold mb-6">Menu</h2>
                    <ul className="space-y-4">
                        <li className="cursor-pointer rounded p-2 hover:bg-white/40 hover:text-shadow-blue-500 ">
                            Dashboard
                        </li>
                        <li className="cursor-pointer rounded p-2 hover:bg-white/40 hover:text-shadow-blue-500">
                            Monthly Chart
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
}

export default Sidebar;