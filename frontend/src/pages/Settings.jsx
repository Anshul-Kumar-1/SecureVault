import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";

import SettingsCard from "../components/settings/SettingsCard";
import ChangePasswordModal from "../components/settings/ChangePasswordModal";

import "../components/settings/Settings.css";

function Settings() {

  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handlePasswordChange = (data) => {
    console.log(data);

    // Later we'll call the backend API here

    setShowPasswordModal(false);
  };

  return (
    <DashboardLayout>
      <DashboardHeader
        title="Settings"
        subtitle="Manage your preferences"
      />

      <SettingsCard
        onChangePassword={() => setShowPasswordModal(true)}
      />

      <ChangePasswordModal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
        onSave={handlePasswordChange}
      />
    </DashboardLayout>
  );
}

export default Settings;