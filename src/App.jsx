import { useState, useEffect } from "react";
import Register from "./components/Register";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null); // State to store backend data
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch data from the backend
    fetch("/api/data") // Relative path due to proxy
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.message); // Set backend message into state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h1>PregnancyJourney</h1>
      <Register />
      {data && <p>Data from backend: {data}</p>}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>Data from backend: {data || "Loading..."}</p> {/* Show fetched data */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
