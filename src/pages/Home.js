import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Login from "../components/Login";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {user ? <h1>Welcome, {user.email}!</h1> : <Login />}
    </div>
  );
};

export default Home;
