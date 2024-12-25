import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import EmailVerification from "./pages/EmailVerification";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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
                  <Home />
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

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
