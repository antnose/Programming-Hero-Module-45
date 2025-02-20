import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-24 h-24">
        <div className="absolute border-4 border-t-4 border-blue-600 rounded-full w-full h-full animate-spin"></div>
        <div className="absolute border-4 border-t-4 border-green-500 rounded-full w-full h-full animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Spinner;
