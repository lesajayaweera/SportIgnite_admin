import React from "react";

const cards = [
  {
    title: "Users",
    value: "1,200",
    color: "bg-blue-500",
  },
  {
    title: "Certifications to Check",
    value: "4,000",
    color: "bg-red-500",
  },
  
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} text-white p-6 rounded-lg shadow-lg`}
        >
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-2xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
