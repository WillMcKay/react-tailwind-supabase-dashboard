import React from "react";
import { supabase } from "../lib/helper/supabaseClient";
import { useNavigate, Link } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/"); // Redirect to the login page
  };

  return (
    <aside className="w-1/6 bg-secondary border-r border-white/5 text-white flex flex-col h-screen">
      <div className="p-4 text-xl font-bold">Dashboard</div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="hover:bg-gray-700 p-2 block rounded">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard/settings" className="hover:bg-gray-700 p-2 block rounded">
              Settings
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard/profile" className="hover:bg-gray-700 p-2 block rounded">
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <button
              onClick={logout}
              className="hover:bg-gray-700 p-2 block rounded w-full text-left"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
