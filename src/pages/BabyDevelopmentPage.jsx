import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import MilestoneInput from "../components/MilestoneInput";
import DevelopmentUpdates from "../components/DevelopmentUpdates";

const BabyDevelopmentPage = () => {
  const [babyAge, setBabyAge] = useState(0);

  // Progress calculation (0-40 weeks)
  const progress = Math.min((babyAge / 40) * 100, 100);

  return (
    <div className="p-4 bg-gray-50 min-h-screen space-y-6 rounded-md">
      <h2 className="text-3xl font-bold text-center text-[#FF6F61]">
        Baby&apos;s Development Tracker
      </h2>

      {/* Milestone Input */}
      <MilestoneInput setBabyAge={setBabyAge} />

      {/* Progress Bar */}
      <ProgressBar progress={progress} />

      {/* Weekly Updates */}
      <DevelopmentUpdates week={babyAge} />
    </div>
  );
};

export default BabyDevelopmentPage;
