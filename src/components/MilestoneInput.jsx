import { useState } from "react";
import PropTypes from "prop-types";

const MilestoneInput = ({ setBabyAge }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const week = parseInt(inputValue, 10);
    if (!isNaN(week) && week >= 0 && week <= 40) {
      setBabyAge(week);
    } else {
      alert("Please enter a valid week between 0 and 40.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 my-6">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter baby's week (0-40)"
        className="border p-2 rounded w-64"
      />
      <button
        type="submit"
        className="bg-[#FF6F61] text-white px-4 py-2 rounded hover:bg-[#FF4F41]"
      >
        Update
      </button>
    </form>
  );
};
MilestoneInput.propTypes = {
  setBabyAge: PropTypes.func.isRequired,
};

export default MilestoneInput;
