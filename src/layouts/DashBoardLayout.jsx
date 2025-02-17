import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication token
    localStorage.removeItem("authToken");

    // Redirect to homepage
    navigate("/", { replace: true });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F9D9E0] shadow-md min-h-screen flex flex-col">
        <h2 className="text-2xl font-bold p-4 text-center border-b border-[#FF6F61] text-[#333333]">
          PregnancyJourney
        </h2>
        <nav className="flex flex-col mt-4 gap-2 flex-1">
          {/* Baby's Development Link */}
          <NavLink
            to="/dashboard/baby-development"
            end
            className={({ isActive }) =>
              `p-3 mx-2 rounded-md ${
                isActive ? "bg-[#FF6F61] text-white" : "text-[#333333]"
              } hover:text-[#FF6F61] hover:bg-white`
            }
          >
            Baby&apos;s Development
          </NavLink>

          {/* Calendar Link */}
          <NavLink
            to="/dashboard/calendar"
            end
            className={({ isActive }) =>
              `p-3 mx-2 rounded-md ${
                isActive ? "bg-[#FF6F61] text-white" : "text-[#333333]"
              } hover:text-[#FF6F61] hover:bg-white`
            }
          >
            Calendar
          </NavLink>

          {/* Spacer to push Logout to the bottom */}
          <div className="flex-grow"></div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="p-3 mx-2 rounded-md text-red-600 hover:bg-red-700 hover:text-white"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
