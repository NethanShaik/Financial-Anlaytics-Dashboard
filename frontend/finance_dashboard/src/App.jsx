import Dashboard from "./pages/Dashboard.jsx";
import {useState} from "react";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);
  return (
  <div className="flex min-h-screen">
    <Sidebar isOpen = {isSidebarOpen} />
    <div className="flex-1 p-6">
      <button type="button" onClick={() => setIsSideBarOpen(!isSidebarOpen)}>
        <img src = "../images/hamburger_icon.jpg" className="h-8 w-8"/>
      </button>
      <Dashboard />
    </div>
  </div>
  );
}

export default App;