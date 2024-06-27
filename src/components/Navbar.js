import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ToggleDarkMode from "./ToggleDarkMode";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-500 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl">
          Calendar App
        </Link>
        <div className="flex items-center">
          <ToggleDarkMode />
          {user ? (
            <div className="ml-4">
              <Link to="/appointments" className="text-white mr-4">
                Appointments
              </Link>
              <button onClick={logout} className="text-white">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/" className="text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
