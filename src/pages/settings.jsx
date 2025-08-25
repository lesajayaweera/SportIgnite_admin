// import React from "react";
// import { doc, setDoc, collection } from "firebase/firestore";
// import { db } from "../firebase";

// function Settings() {
//   const generateRandomStats = () => ({
//     MinutesPlayed: Math.floor(Math.random() * 2000) + 500,
//     Goals: Math.floor(Math.random() * 15),
//     Assists: Math.floor(Math.random() * 10),
//     PassAccuracy: parseFloat((Math.random() * 30 + 70).toFixed(1)),
//     DuelsWon: Math.floor(Math.random() * 100),
//     FoulsCommitted: Math.floor(Math.random() * 20),
//     FoulsSuffered: Math.floor(Math.random() * 20),
//     YellowCards: Math.floor(Math.random() * 5),
//     RedCards: Math.floor(Math.random() * 2),
//     Touches: Math.floor(Math.random() * 600) + 200,
//     Tackles: Math.floor(Math.random() * 50),
//   });

//   const createDummyAthletes = (count = 10) => {
//     return Array.from({ length: count }, (_, i) => ({
//       email: `athlete${i + 1}@gmail.com`,
//       stats: generateRandomStats(),
//     }));
//   };

//   const handleUpload = async () => {
//     const sport = "Football";
//     const athletes = createDummyAthletes(50);

//     for (const athlete of athletes) {
//       // Path: user_stats > Football > athletes > athlete1@gmail.com
//       const docRef = doc(
//         collection(db, "user_stats", sport, "athletes"),
//         athlete.email
//       );

//       const data = {
       
//         email: athlete.email,
//         sport: sport,
//         ...athlete.stats,
//       };

//       try {
//         await setDoc(docRef, data);
//         console.log(`✅ Uploaded: ${athlete.email}`);
//       } catch (error) {
//         console.error(`❌ Error uploading ${athlete.name}:`, error);
//       }
//     }

//     alert("✅ 10 Athletes uploaded under sport → Football → athletes");
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-2xl font-bold mb-4">Upload Dummy Athlete Stats to Firestore</h2>
//       <button
//         onClick={handleUpload}
//         className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-md transition"
//       >
//         Upload Athletes
//       </button>
//     </div>
//   );
// }

// export default Settings;

// import React from "react";
// import { doc, setDoc, collection } from "firebase/firestore";
// import { db } from "../firebase";

// function Settings() {
//   // 🎲 Generate random cricket stats
//   const generateRandomStats = () => ({
//     MatchesPlayed: Math.floor(Math.random() * 30) + 1,
//     Runs: Math.floor(Math.random() * 1000),
//     Wickets: Math.floor(Math.random() * 50),
//     BattingAverage: parseFloat((Math.random() * 40 + 10).toFixed(2)),
//     StrikeRate: parseFloat((Math.random() * 100 + 50).toFixed(2)),
//     EconomyRate: parseFloat((Math.random() * 4 + 3).toFixed(2)),
//     Catches: Math.floor(Math.random() * 20),
//     RunOuts: Math.floor(Math.random() * 10),
//     Fifties: Math.floor(Math.random() * 10),
//     Hundreds: Math.floor(Math.random() * 5),
//   });

//   const createDummyAthletes = (count = 10) => {
//     return Array.from({ length: count }, (_, i) => ({
      
//       email: `cricketplayer2${i + 1}@gmail.com`,
//       stats: generateRandomStats(),
//     }));
//   };

//   const handleUpload = async () => {
//     const sport = "Cricket";
//     const athletes = createDummyAthletes(10);

//     for (const athlete of athletes) {
//       const docRef = doc(
//         collection(db, "user_stats", sport, "athletes"),
//         athlete.email
//       );

//       const data = {
//         email: athlete.email,
//         sport: sport,
//         ...athlete.stats,
//       };

//       try {
//         await setDoc(docRef, data);
//         console.log(`✅ Uploaded: ${athlete.email}`);
//       } catch (error) {
//         console.error(`❌ Error uploading ${athlete.email}:`, error);
//       }
//     }

//     alert("✅ 10 Cricket Athletes uploaded to Firestore!");
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-2xl font-bold mb-4">Upload Dummy Cricket Stats to Firestore</h2>
//       <button
//         onClick={handleUpload}
//         className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition"
//       >
//         Upload Cricket Athletes
//       </button>
//     </div>
//   );
// }

// export default Settings;


import React from "react";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function Settings() {
  // 🎲 Generate random basketball stats
  const generateRandomStats = () => ({
    GamesPlayed: Math.floor(Math.random() * 50) + 1,
    Points: Math.floor(Math.random() * 500),
    Assists: Math.floor(Math.random() * 200),
    Rebounds: Math.floor(Math.random() * 300),
    Steals: Math.floor(Math.random() * 100),
    Blocks: Math.floor(Math.random() * 100),
    Turnovers: Math.floor(Math.random() * 150),
    FieldGoalPercentage: parseFloat((Math.random() * 30 + 40).toFixed(2)), // 40-70%
    ThreePointPercentage: parseFloat((Math.random() * 30 + 30).toFixed(2)), // 30-60%
    FreeThrowPercentage: parseFloat((Math.random() * 25 + 65).toFixed(2)), // 65-90%
  });

  // 👥 Generate dummy basketball athletes
  const createDummyAthletes = (count = 10) => {
    return Array.from({ length: count }, (_, i) => ({
      
      email: `basketball3${i + 1}@gmail.com`,
      stats: generateRandomStats(),
    }));
  };

  // 🔁 Upload athletes to Firestore
  const handleUpload = async () => {
    const sport = "Basketball";
    const athletes = createDummyAthletes(10);

    for (const athlete of athletes) {
      const docRef = doc(
        collection(db, "user_stats", sport, "athletes"),
        athlete.email
      );

      const data = {
        
        email: athlete.email,
        sport: sport,
        ...athlete.stats,
      };

      try {
        await setDoc(docRef, data);
        console.log(`✅ Uploaded: ${athlete.name}`);
      } catch (error) {
        console.error(`❌ Error uploading ${athlete.name}:`, error);
      }
    }

    alert("✅ 10 Basketball Athletes uploaded to Firestore!");
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Upload Dummy Basketball Stats to Firestore</h2>
      <button
        onClick={handleUpload}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-md transition"
      >
        Upload Basketball Athletes
      </button>
    </div>
  );
}

export default Settings;

