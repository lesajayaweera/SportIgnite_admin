
import { Home, Settings, BarChart2 } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-4 hidden md:block fixed">
      <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <Home size={18} /> Home
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <BarChart2 size={18} /> Certification
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
          <Settings size={18} /> Settings
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
