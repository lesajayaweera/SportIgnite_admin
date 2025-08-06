import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { collection, setDoc, deleteDoc } from "firebase/firestore"; // you missed `collection`, `setDoc`, `deleteDoc`

import { getStorage, ref, deleteObject } from "firebase/storage";


function PendingVerificationCard({
  certificateImageUrl = [],
  verificationLetter = [],
  title,
  isAvailable,
  docPath,
}) {


  const [isApprove, setApprove] = useState(false);
  const [isDisapprove, setDisapprove] = useState(false);

  const handleApprove = async () => {
    try {
      setApprove(true);

      if (!docPath) throw new Error("Missing document path!");

      // Extract only the relative Firestore path
      const relativePath = docPath.split("/documents/")[1];
      if (!relativePath) throw new Error("Invalid document path!");

      const parts = relativePath.split("/").filter(Boolean);
      if (parts.length < 2) throw new Error("Document path is too short");

      const [collection1, userId, collection2, certificateId] = parts;

      const certRef = doc(db, ...parts);
      await updateDoc(certRef, { status: "true" });

      const notifRef = doc(collection(db, `users/${userId}/notifications`));
      await setDoc(notifRef, {
        message: `Your certificate "${title}" has been approved.`,
        timestamp: new Date(),
        type: "approval",
        isRead: 'false',
        certificateId,
      });
      setApprove(false);
      window.alert("Certificate approved and user notified!");
    } catch (error) {
      window.alert("Error approving certificate:", error);
      setApprove(false);


    }
  };






  const getStoragePathFromUrl = (url) => {
    try {
      const decodedUrl = decodeURIComponent(url);
      const matches = decodedUrl.match(/\/o\/(.+)\?alt=media/);
      if (matches && matches[1]) {
        return matches[1];
      }
    } catch (e) {
      console.error("Error parsing storage path:", e);
    }
    return null;
  };

  const handleDisapprove = async () => {
    setDisapprove(true);
    try {
      if (!docPath) throw new Error("Missing document path!");

      const relativePath = docPath.split("/documents/")[1];
      if (!relativePath) throw new Error("Invalid document path!");

      const parts = relativePath.split("/").filter(Boolean);
      if (parts.length < 4) throw new Error("Invalid document path structure");

      const [collection1, userId, collection2, certificateId] = parts;

      // 🔥 Delete images from storage
      const storage = getStorage();

      for (const cert of certificateImageUrl) {
        const path = getStoragePathFromUrl(cert.url);
        if (path) {
          const fileRef = ref(storage, path);
          await deleteObject(fileRef).catch((e) =>
            console.warn("Failed to delete certificate image:", e.message)

          );
          setDisapprove(false);
        }
      }

      for (const letter of verificationLetter) {
        const path = getStoragePathFromUrl(letter.url);
        if (path) {
          const fileRef = ref(storage, path);
          await deleteObject(fileRef).catch((e) =>
            console.warn("Failed to delete verification letter image:", e.message)
          );
          setDisapprove(false);
        }
      }

      // Delete Firestore document
      const certRef = doc(db, ...parts);
      await deleteDoc(certRef);

      // Send notification
      const notifRef = doc(collection(db, `users/${userId}/notifications`));
      await setDoc(notifRef, {
        message: `Your certificate "${title}" has been rejected.`,
        timestamp: new Date(),
        type: "rejection",
        isRead: 'false',
        certificateId,
      });
      setDisapprove(false);
      window.alert("Certificate disapproved and user notified.");
    } catch (error) {
      window.alert("Error disapproving certificate:", error);
      setDisapprove(false);
    }
  };


  return (
    <div className={`${isAvailable ? "w-full" : "max-w-4xl"} bg-white rounded-2xl flex shadow-lg overflow-hidden m-4`}>
      <div className="flex flex-col w-full gap-6 p-6">
        {/* Image Columns */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Certificates */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              Certificates
            </h2>
            <div className="flex flex-col gap-4">
              {certificateImageUrl.map((item, index) => (
                <img
                  key={index}
                  src={item.url}
                  alt={item.title || `Certificate ${index + 1}`}
                  className={` mx-auto ${isAvailable ? "object-cover w-1/2  " : "object-contain w-24"} rounded-lg shadow hover:scale-105 transition-transform`}
                />
              ))}
            </div>
          </div>

          {/* Verification Letters */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              Verification Letters
            </h2>
            <div className="flex flex-col gap-4">
              {verificationLetter.map((item, index) => (
                <img
                  key={index}
                  src={item.url}
                  alt={item.title || `Verification Letter ${index + 1}`}
                  className={` mx-auto ${isAvailable ? "object-cover w-1/2  " : "object-contain w-24 "} rounded-lg shadow hover:scale-105 transition-transform`}
                />
              ))}
            </div>
          </div>
        </div>
        {
          !isAvailable && (
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                Pending Verification
              </span>
            </div>
          )
        }

        {/* Buttons */}
        {isAvailable && (
          <div className="flex justify-center gap-4">
            <button
              onClick={handleApprove}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-md transition"
            >
              {isApprove ? 'Processing' : 'Approve'}
            </button>
            <button
              onClick={handleDisapprove}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-md transition"
            >
              {isDisapprove ? 'Processing' : 'Disapprove'}

            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PendingVerificationCard;
