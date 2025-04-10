import React, { useState } from "react";

const Magnet = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleVisitSite = () => {
    setShowIframe(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {!showIframe ? (
        <button
          onClick={handleVisitSite}
          className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          Visit Magnetic Website
        </button>
      ) : (
        <iframe
          src="https://www.magnetic.ae/"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Magnetic Website"
        />
      )}
    </div>
  );
};

export default Magnet;
