import { useState, useEffect } from "react";
import axios from "axios";

const BabyDevelopmentPage = () => {
  const [dueDate, setDueDate] = useState(""); // Store the due date
  const [isSaving, setIsSaving] = useState(false); // Loading state for saving
  const [loading, setLoading] = useState(true); // Loading state for fetching
  const [message, setMessage] = useState(""); // Success/Error message
  const userName = "Emily"; // Replace with actual user data from your auth context

  const babyDevelopmentInfo =
    "At this stage, your baby is about the size of a peach! Their tiny fingers and toes are fully formed.";

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
    } catch (error) {
      console.error(
        "Failed to save due date:",
        error.response?.data || error.message
      );
      setMessage("Failed to save due date.");
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-[#333333] mb-6">
        Baby&apos;s Development Tracker
      </h1>

      {/* Due Date Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-3xl mx-auto">
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
          className={`mt-4 px-4 py-2 text-white rounded-md ${
            isSaving ? "bg-gray-400 cursor-not-allowed" : "bg-[#FF6F61]"
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
        {dueDate && (
          <p className="mt-4 text-gray-700">
            Selected Due Date:{" "}
            <strong className="text-[#FF6F61]">{dueDate}</strong>
          </p>
        )}
      </div>

      {/* User Greeting & Baby Info Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-2 text-[#FF6F61]">
          👋 Hello, {userName}!
        </h2>
        <p className="text-gray-700 mb-4">
          Today is a special day in your pregnancy journey.
        </p>
        <p className="text-gray-600 italic">{babyDevelopmentInfo}</p>
      </div>
    </div>
  );
};

export default BabyDevelopmentPage;
