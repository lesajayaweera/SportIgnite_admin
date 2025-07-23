
function PendingVerificationCard ({ imageUrl, title, isAvailable}){
  if(!isAvailable) return null;

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
          Pending Verification
        </span>
      </div>

      {isAvailable? 
        <div className="flex items-center justify-around p-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Approve
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Disapprove
            </button>
        </div>
        : ''}

    </div>
  );
};

export default PendingVerificationCard;
