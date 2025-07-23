import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import PendingVerificationCard from "../components/pendingCard";

function Home({ name }) {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar name={name ? name : "Guest"} />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <DashboardCards />
          <h1 className="text-2xl font-bold mt-4 mb-4">Pending Certificates</h1>
          <div className="flex gap-2 flex-wrap">
            <PendingVerificationCard imageUrl="/background.jpg" page={true}/>
            <PendingVerificationCard imageUrl="/background.jpg"page={false} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
