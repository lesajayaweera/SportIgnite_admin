
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import PendingVerificationCard from "../components/pendingCard";



const CertificationVerify = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar name={name ? name :'Guest'}/>
        <main className="p-6">
          
          <h1 className="text-2xl font-bold mt-4 mb-4">Pending Certificates</h1>
          <div className="flex gap-2">
          <PendingVerificationCard imageUrl={'/public/background.jpg'}></PendingVerificationCard>
          <PendingVerificationCard imageUrl={'/public/background.jpg'}></PendingVerificationCard>

          </div>


        </main>
      </div>
    </div>
  );
};

export default CertificationVerify;
