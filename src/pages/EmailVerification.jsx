import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmailVerification = () => {
  const { token } = useParams(); // Extract token from the path
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (token) {
      fetch(`/api/verify-email?token=${token}`)
        .then((response) => response.json())
        .then((data) => {
          setSuccess(data.success);
          setMessage(data.message);
        })
        .catch(() => {
          setSuccess(false);
          setMessage("An error occurred while verifying your email.");
        });
    } else {
      setMessage("No token provided.");
      setSuccess(false);
    }
  }, [token]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow rounded">
        <h1
          className={`text-2xl font-bold ${
            success ? "text-green-600" : "text-red-600"
          }`}
        >
          {success ? "Success!" : "Error!"}
        </h1>
        <p className="mt-4 text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default EmailVerification;
