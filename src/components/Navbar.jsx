import React from "react";

const Navbar = ({name}) => {
  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <div className="font-semibold">Welcome back,{name} 👋</div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border rounded-md"
        />
        <img
          src="https://i.pravatar.cc/30"
          alt="avatar"
          className="rounded-full w-8 h-8"
        />
      </div>
    </header>
  );
};

export default Navbar;
