import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios"; // Import axios

// Set default timezone
moment.tz.setDefault("UTC");
const localizer = momentLocalizer(moment);

// 🕒 Custom Event Component for Monthly View with Tailwind
import PropTypes from "prop-types";

const CustomEvent = ({ event }) => {
  return (
    <div className="relative group cursor-pointer">
      {/* Event Title */}
      <span className="font-bold block truncate">{event.title}</span>

      {/* Tooltip with Time (Appears on Hover) */}
      <div className="hidden group-hover:flex flex-col absolute top-full left-0 mt-1 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-lg z-50 whitespace-nowrap">
        <span>{event.title}</span>
        <span>
          {moment(event.start).format("h:mm A")} -{" "}
          {moment(event.end).format("h:mm A")}
        </span>
      </div>
    </div>
  );
};

CustomEvent.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

const CalendarPage = () => {
  const [events, setEvents] = useState([]); // Set initial events state to an empty array
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
  });

  // 🗓️ Fetch events from the backend on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch events from the backend API
        const response = await axios.get(
          "http://localhost:5000/api/events/all"
        );
        setEvents(response.data); // Update the state with the fetched events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array means this runs once on component mount

  // 🗓️ Handle slot selection (when clicking a date range)
  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({
      title: "",
      start: moment(start).toDate(),
      end: moment(end).toDate(),
    });
    setModalVisible(true);
  };

  // ✅ Handle event creation
  const handleCreateEvent = async () => {
    const eventData = {
      title: newEvent.title,
      start: moment(newEvent.start).format("YYYY-MM-DD HH:mm:ss"),
      end: moment(newEvent.end).format("YYYY-MM-DD HH:mm:ss"),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/events/save",
        eventData
      );
      if (response.data.status === "success") {
        setEvents([
          ...events,
          {
            ...eventData,
            id: Date.now(), // Create a new ID for the event
          },
        ]);
        setModalVisible(false); // Close the modal after saving the event
      } else {
        console.error("Failed to create event:", response.data.message);
      }
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  // 🎨 Customize event styles and content for different views
  const eventPropGetter = () => {
    return {
      className: "bg-blue-500 text-white p-2 rounded-md", // Customize the event style
    };
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-0">
      <div className="bg-[#F9D9E0] p-0 rounded shadow-md w-full max-w-full mx-4 mt-0 mb-4">
        <h2 className="text-2xl font-bold mb-12 text-center">My Calendar</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "90vh", width: "100%" }}
          selectable={true}
          onSelectSlot={handleSelectSlot}
          components={{
            event: CustomEvent, // Use the custom event component
          }}
          eventPropGetter={eventPropGetter} // Apply event customizations
        />
      </div>

      {/* Modal for Creating a New Event */}
      {modalVisible && (
        <div className="modal-overlay fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Create Event</h3>
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">
                  Start Date:
                </label>
                <input
                  type="datetime-local"
                  value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
                  onChange={(e) =>
                    setNewEvent({
                      ...newEvent,
                      start: moment(e.target.value).toDate(),
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">
                  End Date:
                </label>
                <input
                  type="datetime-local"
                  value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
                  onChange={(e) =>
                    setNewEvent({
                      ...newEvent,
                      end: moment(e.target.value).toDate(),
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCreateEvent}
                className="bg-[#FF6F61] text-white px-4 py-2 rounded-md hover:bg-[#e85c4f]"
              >
                Save Event
              </button>
              <button
                onClick={() => setModalVisible(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
