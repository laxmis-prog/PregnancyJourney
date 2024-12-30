import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import EmailVerification from "./pages/EmailVerification";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import DashboardLayout from "./layouts/DashBoardLayout"; // Import the new layout
import "./App.css";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <Router>
      {/* Wrapper for full-screen layout */}
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
                  <Home />
                </div>
                <Footer />
              </>
            }
          />

          {/* Register Page (Standalone, No Navbar & Footer) */}
          <Route
            path="/register"
            element={
              <div className="w-full min-h-screen bg-gray-50">
                <Register />
              </div>
            }
          />

          {/* Email Verification Page */}
          <Route
            path="/verify/:token"
            element={
              <>
                <Navbar />
                <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
                  <EmailVerification />
                </div>
                <Footer />
              </>
            }
          />

          {/* Login Page (No Navbar & Footer) */}
          <Route
            path="/login"
            element={
              <div className="flex items-center justify-center w-full min-h-screen bg-white">
                <Login />
              </div>
            }
          />

          {/* Protected Routes for Dashboard */}
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              {/* Dashboard Main Page */}
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Calendar Page */}
              <Route path="/dashboard/calendar" element={<CalendarPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
