import DashboardLayout from "../layouts/DashboardLayout";

import DashboardHeader from "../components/dashboard/DashboardHeader";

import UploadBox from "../components/files/UploadBox";

function Upload() {
  return (
    <DashboardLayout>

      <DashboardHeader
        title="Upload File"
      />

      <UploadBox />

    </DashboardLayout>
  );
}

export default Upload;