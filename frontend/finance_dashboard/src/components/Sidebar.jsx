import {NavLink} from "react-router-dom";
import {useEffect, useRef} from "react";

function Sidebar ({isOpen, onClose})
{
    const sidebarRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);


    return (
        <div ref={sidebarRef} className={`fixed top-0 left-0 z-50 h-screen overflow-hidden bg-gray-200/30 text-black shadow-lg backdrop-blur-lg transition-all duration-300 z-50${isOpen ? "w-50 p-6":"w-0 p-0 overflow-hidden"}`}>
            {isOpen && (
                <>
                    <h2 className="text-xl mt-7 font-bold mb-6">Menu</h2>
                    <ul className="space-y-4">
                        <li className="cursor-pointer rounded p-2 hover:bg-white/40 hover:text-shadow-blue-500 ">
                            <NavLink to = "/" onClick={onClose}>
                            Dashboard
                            </NavLink>
                        </li>
                        <li className="cursor-pointer rounded p-2 hover:bg-white/40 hover:text-shadow-blue-500">
                            <NavLink to = "/monthly_charts" onClick={onClose}>
                            Monthly Chart
                            </NavLink>
                        </li>
                        <li className="cursor-pointer rounderd p-2 hover:bg-white/40 hover:text-shadow-blue-500">
                            <NavLink to = "/transaction_form" onClick={onClose}>
                            Transaction Log Form
                            </NavLink>
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
}

export default Sidebar;