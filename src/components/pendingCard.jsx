import React, { useEffect } from "react";

function PendingVerificationCard({
  certificateImageUrl = [],
  verificationLetter = [],
  title,
  isAvailable,
}) {
  useEffect(() => {
    document.title = "Certificate Verification";
  }, []);

  return (
    <div
      className={`${
        isAvailable ? "w-full" : "max-w-md"
      } bg-white rounded-2xl shadow-lg overflow-hidden m-4`}
    >
      <div className="flex-col gap-6 p-6">
        {/* Certificates Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Certificates
          </h2>
          <div className="flex flex-col gap-4">
            {certificateImageUrl.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt={item.title || `Certificate ${index + 1}`}  
                className="w-full h-48 object-cover rounded-lg shadow hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Verification Letters Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Verification Letters
          </h2>
          <div className="flex flex-col gap-4">
            {verificationLetter.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt={item.title || `Verification Letter ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Title and Status (Only if not available) */}
        {!isAvailable && (
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-1 rounded-full">
              Pending Verification
            </span>
          </div>
        )}

        {/* Action Buttons (Only if available) */}
        {isAvailable && (
          <div className="flex justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-md transition">
              Approve
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-md transition">
              Disapprove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PendingVerificationCard;
