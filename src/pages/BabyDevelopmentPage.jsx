import { useState, useEffect } from "react";
import axios from "axios";
import babyDevelopmentData from "./babyDevelopmentData"; // Import the new baby development data
import dayjs from "dayjs";

const BabyDevelopmentPage = () => {
  const [dueDate, setDueDate] = useState(""); // Store the due date
  const [isSaving, setIsSaving] = useState(false); // Loading state for saving
  const [loading, setLoading] = useState(true); // Loading state for fetching
  const [message, setMessage] = useState(""); // Success/Error message
  const [showDueDateCard, setShowDueDateCard] = useState(false); // Show/hide due date card
  const [currentWeek, setCurrentWeek] = useState(0); // Store the current week

  // Fetch due date from backend on page load
  useEffect(() => {
    const fetchDueDate = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/due-date",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );
        if (response.data.due_date) {
          setDueDate(response.data.due_date);
          calculateCurrentWeek(response.data.due_date); // Calculate current week when due date is fetched
        }
      } catch (error) {
        console.error("Failed to fetch due date:", error);
        setMessage("Failed to fetch due date.");
      } finally {
        setLoading(false);
      }
    };

    fetchDueDate();
  }, []);

  // Function to calculate current week based on the due date
  const calculateCurrentWeek = (dueDate) => {
    const today = dayjs();
    const startOfPregnancy = dayjs(dueDate).subtract(280, "day"); // 280 days is the average length of a pregnancy
    const week = Math.ceil(today.diff(startOfPregnancy, "day") / 7); // Calculate the week number
    setCurrentWeek(week);
  };

  // Handle due date change
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  // Save due date to backend
  const saveDueDate = async () => {
    setIsSaving(true);
    setMessage("");
    try {
      await axios.post(
        "http://localhost:5000/api/user/due-date",
        { due_date: dueDate },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setMessage("Due date saved successfully!");
      calculateCurrentWeek(dueDate); // Recalculate current week when new due date is saved
    } catch (error) {
      console.error("Failed to save due date:", error);
      setMessage("Failed to save due date.");
    } finally {
      setIsSaving(false);
    }
  };

  // Show loading state
  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // Find the baby development info for the current week
  const currentDevelopment = babyDevelopmentData.find(
    (data) => data.week === currentWeek
  ) || {
    title: "Your Baby's Development",
    description: "Loading...",
    image: "",
  };

  return (
    <div className="p-4 bg-white min-h-screen relative">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-[#333333] mb-6">
        Your Baby&apos;s Growth Journey
      </h1>

      {/* Due Date Icon/Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setShowDueDateCard(true)}
          className="flex items-center gap-2 bg-[#FF6F61] text-white px-3 py-2 rounded-md shadow-md hover:bg-[#E65C50]"
        >
          📅 Set Due Date
        </button>
      </div>

      {/* Due Date Modal/Card */}
      {showDueDateCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4 text-[#FF6F61]">
              🗓️ Set Your Baby&apos;s Due Date
            </h2>
            <input
              type="date"
              value={dueDate}
              onChange={handleDueDateChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={saveDueDate}
              disabled={isSaving}
              className={`mt-4 px-4 py-2 text-white rounded-md w-full ${
                isSaving
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#FF6F61] hover:bg-[#E65C50]"
              }`}
            >
              {isSaving ? "Saving..." : "Save Due Date"}
            </button>
            {message && (
              <p
                className={`mt-4 text-sm ${
                  message.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
            <button
              onClick={() => setShowDueDateCard(false)}
              className="mt-4 text-sm text-gray-500 hover:underline w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Baby Development Card */}
      <div className="bg-[#FFC0CB] rounded-lg shadow-xl p-12 mb-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 w-full h-80 md:pr-8">
          <h2 className="text-2xl font-bold mb-2 text-[#FF6F61]">
            🌟 {currentDevelopment.title}
          </h2>
          <p className="text-gray-700 text-xl mb-4">
            Today marks a special milestone in your baby&apos;s development
            journey!
          </p>
          <p className="text-gray-600 text-xl italic">
            {currentDevelopment.description}
          </p>
        </div>
        <div className="flex-1 text-center">
          <img
            src={currentDevelopment.image}
            alt={currentDevelopment.title}
            className="w-64 h-64 mx-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BabyDevelopmentPage;
