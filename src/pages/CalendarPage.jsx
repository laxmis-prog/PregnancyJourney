import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Set up the localizer (using moment.js for date handling)
const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events] = useState([
    {
      title: "Sample Event",
      start: new Date(2024, 0, 10), // Adjust the date accordingly
      end: new Date(2024, 0, 10, 1, 0),
    },
    {
      title: "Another Event",
      start: new Date(2024, 0, 15, 10, 0),
      end: new Date(2024, 0, 15, 12, 0),
    },
  ]);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-0">
      <div className="bg-[#F9D9E0] p-0 rounded shadow-md w-full max-w-full mx-4 mt-0 mb-4">
        <h2 className="text-2xl font-bold mb-12 text-center">My Calendar</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "90vh", width: "100%" }} // Calendar uses full width with no margins
        />
      </div>
    </div>
  );
};

export default CalendarPage;
