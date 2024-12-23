import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import EmailVerification from "./pages/EmailVerification";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.message);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      {/* Wrapper for full-screen layout */}
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow w-full">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">
                      PregnancyJourney
                    </h1>
                    <Register />
                    {data && (
                      <p className="mt-4 text-gray-600">
                        Data from backend: {data}
                      </p>
                    )}
                  </div>
                </div>
              }
            />

            {/* Register Page */}
            <Route
              path="/register"
              element={
                <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4 text-gray-800">
                      Register Page
                    </h1>
                    <Register />
                  </div>
                </div>
              }
            />

            {/* Email Verification */}
            <Route
              path="/verify/:token"
              element={
                <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
                  <EmailVerification />
                </div>
              }
            />

            {/* Login Page */}
            <Route
              path="/login"
              element={
                <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
                  <Login />
                </div>
              }
            />

            {/* Protected Route for Dashboard */}
            <Route element={<ProtectedRoute />}>
              <Route
                path="/dashboard"
                element={
                  <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
                    <Dashboard />
                  </div>
                }
              />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
