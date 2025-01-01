import PropTypes from "prop-types";

const weeklyUpdates = {
  1: "Your baby is now the size of a poppy seed! Tiny but growing fast.",
  10: "Your baby is now the size of a kumquat and starting to develop limbs.",
  20: "Your baby is about 25cm long and can hear sounds from the outside world.",
  30: "Your baby’s eyes are now open, and they can sense light changes.",
  40: "Congratulations! Your baby is fully developed and ready to meet you.",
};

const DevelopmentUpdates = ({ week }) => {
  let message = weeklyUpdates[week] || "Enter a valid week to see updates.";

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h3 className="text-xl font-bold mb-2">Weekly Update</h3>
      <p className="text-gray-700">{message}</p>
    </div>
  );
};

DevelopmentUpdates.propTypes = {
  week: PropTypes.number.isRequired,
};

export default DevelopmentUpdates;
