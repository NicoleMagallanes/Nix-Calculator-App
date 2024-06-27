import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"; // Import QueryClient and QueryClientProvider
import { AuthProvider } from "./contexts/AuthContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient(); // Create a new instance of QueryClient

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Wrap your app with QueryClientProvider */}
      <AuthProvider>
        <DarkModeProvider>
          <Router>
            <div className="min-h-screen">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appointments" element={<Appointments />} />
              </Routes>
            </div>
          </Router>
        </DarkModeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
