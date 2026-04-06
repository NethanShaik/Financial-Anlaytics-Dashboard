import Dashboard from "./pages/Dashboard.jsx";
import {useState} from "react";
import Sidebar from "./components/Sidebar.jsx";
import MonthlyCharts from "./pages/MonthlyCharts.jsx";
import {Routes, Route} from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  return (
  <div className="relative min-h-screen w-full bg-gray-100">
    <button
        type="button"
        onClick={() => setIsSideBarOpen(!isSidebarOpen)}
        className="fixed left-4 top-4 z-[60] rounded-full bg-black/10 p-2 shadow-md backdrop-blur-md">
      ☰
    </button>
    <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSideBarOpen(false)} />

    <main className="min-h-screen w-full p-0">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/monthly_charts" element={<MonthlyCharts />} />
      </Routes>
    </main>
  </div>
  );
}

export default App;