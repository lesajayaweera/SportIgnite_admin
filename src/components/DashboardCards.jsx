import React, { useEffect, useState } from "react";
import {
  collectionGroup,
  query,
  where,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { db } from "../firebase";

const DashboardCards = () => {
  const [certCount, setCertCount] = useState("...");
  const [userCount, setUserCount] = useState("...");

  useEffect(() => {
    // 🔴 Real-time listener for certificates to validate
    const certQuery = query(
      collectionGroup(db, "certificates"),
      where("status", "==", "false")
    );

    const unsubscribeCerts = onSnapshot(
      certQuery,
      (snapshot) => {
        setCertCount(snapshot.size);
      },
      (error) => {
        console.error("Error fetching certifications:", error);
        setCertCount("Error");
      }
    );

    // 🔵 Real-time listener for users collection
    const userQuery = collection(db, "users");

    const unsubscribeUsers = onSnapshot(
      userQuery,
      (snapshot) => {
        setUserCount(snapshot.size);
      },
      (error) => {
        console.error("Error fetching users:", error);
        setUserCount("Error");
      }
    );

    // Cleanup both listeners on unmount
    return () => {
      unsubscribeCerts();
      unsubscribeUsers();
    };
  }, []);

  const cards = [
    {
      title: "Users",
      value: userCount,
      color: "bg-blue-500",
    },
    {
      title: "Certifications to Check",
      value: certCount,
      color: "bg-red-500",
    },
  ];

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
