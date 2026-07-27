import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import QuickActions from "../components/dashboard/QuickActions";
import RecentFiles from "../components/dashboard/RecentFiles";

import useFiles from "../hooks/useFiles";

function Dashboard() {
  const { files } = useFiles();

  console.log("Dashboard files:", files);
  
  return (
    <DashboardLayout>

      <DashboardHeader />

      <StatsCards files={files} />

      <QuickActions />

      <RecentFiles files={files} />

    </DashboardLayout>
  );
}

export default Dashboard;