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
        isAvailable ? "" : "max-w-sm"
      } w-full bg-white rounded-2xl shadow-md overflow-hidden m-2`}
    >
      <div className={`flex flex-col items-center gap-4 ${isAvailable ? "" : "p-4"}`}>
        <div className="flex">
          {/* Certificate Section */}
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="font-bold text-2xl">Certificates</h2>
          <div id="certificate" className="flex flex-col w-full gap-2 justify-center">
            {certificateImageUrl.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt={item.title || `Certificate ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Verification Letter Section */}
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="font-bold text-2xl">Verification Letters</h2>
          <div id="verification" className="flex flex-col gap-2 justify-center">
            {verificationLetter.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt={item.title || `Verification Letter ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
        </div>

        {/* Title & Status */}
        {
          !isAvailable &&(
            <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
            Pending Verification
          </span>
        </div>
          )
        }

        {/* Action Buttons */}
        {isAvailable && (
          <div className="flex items-center justify-around p-4 w-full">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Approve
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Disapprove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PendingVerificationCard;
