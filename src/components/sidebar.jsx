
import { Home, Settings, BarChart2 } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Sidebar = () => {
  function handleLogout(){
  const navigate = useNavigate();

    localStorage.removeItem('userToken');
    navigate('/login');
  }
  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-4 hidden md:block ">
      <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
      <nav className="space-y-4">
        <Link to={'/'} className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <Home size={18} /> Home
        </Link>
        <Link to={'/certificates'}  className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <BarChart2 size={18} /> Certification
        </Link>
        <Link className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <Settings size={18} /> Settings
        </Link>

        <button className="bg-red-500 px-4 py-2 rounded text-white font-bold cursor-pointer" onClick={handleLogout}>Logout</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
