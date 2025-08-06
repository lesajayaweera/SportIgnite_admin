import { Home, Settings, BarChart2, NotebookTextIcon, User, Database } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ pagetitle }) => {
  const navigate = useNavigate(); 

  function handleLogout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('adminEmail'); 
    navigate('/login');
  }

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-4 hidden md:block fixed">
      <h2 className="text-xl font-bold mb-6">{pagetitle || 'My Dashboard'}</h2>
      <nav className="space-y-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer"
        >
          <Home size={18} /> Home
        </Link>
        <Link
          to="/certificates"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer"
        >
          <NotebookTextIcon size={18} /> Certification
        </Link>
        <Link
          to="/settings"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <Settings size={18} /> Settings
        </Link>
        <Link
          to="/analytics"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer"
        >
          <BarChart2 size={18} /> Analytics
        </Link> 
        <Link to={"/users"}
          className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer"
        >
          <User size={18} /> Users
        </Link>
        <Link
          to="/database"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer"
        >
          <Database size={18} /> Database
        </Link>

        <button
          className="bg-red-500 px-4 py-2 rounded text-white font-bold cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
