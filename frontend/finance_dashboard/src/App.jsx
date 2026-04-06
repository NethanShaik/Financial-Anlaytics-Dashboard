import Dashboard from "./pages/Dashboard.jsx";
import {useState} from "react";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  return (
  <div className="relative min-h-screen bg-gray-100">
    <button
        type="button"
        onClick={() => setIsSideBarOpen(!isSidebarOpen)}
        className="fixed left-4 top-4 z-[60] rounded-full bg-black/10 p-2 shadow-md backdrop-blur-md">
      ☰
    </button>
    <Sidebar isOpen={isSidebarOpen} />

    <main className="z-10 p-6 pt-20">
      <Dashboard />
    </main>
  </div>
  );
}

export default App;