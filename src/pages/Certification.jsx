import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import PendingVerificationCard from "../components/pendingCard";
import { collectionGroup, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { doc } from "firebase/firestore";


const CertificationVerify = () => {
  const [certificates, setCertificates] = useState([]);
  const name = "Admin";

  useEffect(() => {
    const q = query(
      collectionGroup(db, "certificates"),
      where("status", "==", "false")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedCertificates = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        docPath: docSnap._key.path.segments.join("/"),
        ...docSnap.data(),
      }));

      setCertificates(fetchedCertificates);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar pagetitle={'Certificate Verification'}/>
      <div className="ml-64 flex-1 flex flex-col">
        <Navbar name={name || "Guest"} />
        <main className="p-6 mt-10">
          <h1 className="text-2xl font-bold mt-4 mb-4">Pending Certificates</h1>
          <div className="w-full flex flex-wrap gap-4">
            {certificates.length > 0 ? (
              certificates.map((cert, index) => (
                <PendingVerificationCard
                  key={cert.id || index}
                  title={cert.title}
                  isAvailable={true}
                  docPath={cert.docPath}
                  certificateImageUrl={[{ url: cert.certificateImageUrl }]}
                  verificationLetter={[{ url: cert.referenceLetterImageUrl }]}
                />
              ))
            ) : (
              <div className="text-gray-500 text-lg mt-4">
                There are no certificates to verify.
              </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
};

export default CertificationVerify;
