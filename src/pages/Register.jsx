import { useState } from "react";

const Register = () => {
  const [dueDate, setDueDate] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dueDate, email, username, password }),
      });
      const data = await response.text();
      setMessage(data);
    } catch {
      setMessage("Error registering user.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {/* Registration Card */}
      <div className="w-full max-w-lg bg-[#FADADD] rounded-lg p-8 md:p-10">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-700 text-sm text-center mb-6">
          Join us on your pregnancy journey
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Due Date Field */}
          <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Due Date of the child
            </label>
            <input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6F61] focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6F61] focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6F61] focus:outline-none"
              placeholder="Choose a username"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6F61] focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6F61] focus:outline-none"
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#FF6F61] text-white font-medium text-lg rounded-md hover:bg-[#e65a4f] transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Message Section */}
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("Error") || message.includes("match")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-3 text-gray-700 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-700">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#FF6F61] font-medium hover:underline"
          >
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
