import Sidebar from "../components/dashboard/Sidebar";
import "./DashboardLayout.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        {children}

      </main>

    </div>
  );
}

export default DashboardLayout;