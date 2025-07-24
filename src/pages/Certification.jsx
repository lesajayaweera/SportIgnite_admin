
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import PendingVerificationCard from "../components/pendingCard";



const CertificationVerify = () => {
// dummy data
  const certificates =[
    {title:'Hellow world',
    url:'https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {title:'Hellow world',
    url:'https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
  ]

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar name={name ? name :'Guest'}/>
        <main className="p-6">
          
          <h1 className="text-2xl font-bold mt-4 mb-4">Pending Certificates</h1>
          <div className="flex-wrap">
          <PendingVerificationCard certificateImageUrl={certificates} verificationLetter={certificates}  isAvailable={true} ></PendingVerificationCard>
          <PendingVerificationCard   certificateImageUrl={certificates}  isAvailable={true}></PendingVerificationCard>

          </div>


        </main>
      </div>
    </div>
  );
};

export default CertificationVerify;
