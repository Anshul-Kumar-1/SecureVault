import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";

import ProfileHeader from "../components/profile/ProfileHeader";
import StatsGrid from "../components/profile/StatsGrid";
import AccountInfo from "../components/profile/AccountInfo";
import EditProfileModal from "../components/profile/EditProfileModal";

import useFiles from "../hooks/useFiles";
import useAuth from "../hooks/useAuth";

import "../components/profile/Profile.css";

import { useState } from "react";

function Profile() {
  const [showModal, setShowModal] = useState(false);

  const { user } = useAuth();
  const { files } = useFiles();

  const handleSave = (data) => {
    console.log("Updated Profile:", data);

    // Later we'll call the backend API here

    setShowModal(false);
  };

  return (
    <DashboardLayout>
      <DashboardHeader
        title="Profile"
        subtitle="Manage your SecureVault account"
      />

      <ProfileHeader
        user={user}
        files={files}
        onEdit={() => setShowModal(true)}
      />

      <StatsGrid files={files} user={user} />

      <AccountInfo
        user={user}
        onEdit={() => setShowModal(true)}
      />

      {/* ✅ This was missing */}
      <EditProfileModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        user={user}
        onSave={handleSave}
      />
    </DashboardLayout>
  );
}

export default Profile;