import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-md my-4">
      <div
        className="bg-[#FF6F61] h-full text-white text-center text-sm font-bold"
        style={{ width: `${progress}%` }}
      >
        {progress.toFixed(0)}%
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
