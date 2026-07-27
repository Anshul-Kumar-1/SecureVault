import {
  FaLock,
  FaLockOpen,
  FaFolderOpen,
  FaChartBar,
} from "react-icons/fa";

import ActionCard from "./ActionCard";

import "./QuickActions.css";

function QuickActions() {
  return (
    <section className="quick-actions">

      <div className="section-header">
        <h2>Quick Actions</h2>
        <p>Choose what you'd like to do.</p>
      </div>

      <div className="quick-actions-grid">

        <ActionCard
          icon={<FaLock />}
          title="Encrypt File"
          description="Encrypt any local file using AES-256 encryption."
          to="/encrypt"
        />

        <ActionCard
          icon={<FaLockOpen />}
          title="Decrypt File"
          description="Decrypt encrypted (.enc) files securely."
          to="/decrypt"
        />

        <ActionCard
          icon={<FaFolderOpen />}
          title="My Files"
          description="Manage your encrypted cloud storage."
          to="/files"
        />

        <ActionCard
          icon={<FaChartBar />}
          title="Statistics"
          description="View storage usage and activity."
          to="/dashboard"
        />

      </div>

    </section>
  );
}

export default QuickActions;