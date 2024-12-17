import { useState, useEffect } from "react";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(null); // State to store backend data

  useEffect(() => {
    // Fetch data from the backend
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.message); // Set backend message into state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
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
              }
            />

            {/* Register Page */}
            <Route
              path="/register"
              element={
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-4 text-gray-800">
                    Register Page
                  </h1>
                  <Register />
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer (Optional) */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-4">
          <p>&copy; 2024 PregnancyJourney. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
