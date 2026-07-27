import {
  FaFolderOpen,
  FaDatabase,
  FaLock,
  FaCalendarAlt,
} from "react-icons/fa";

import StatsCard from "./StatsCard";
import "./StatsCards.css";

function StatsCards({ files = [] }) {
    console.log("Stats files:", files);
    
  const totalFiles = files.length;

  const totalStorage = files.reduce(
    (sum, file) => sum + (file.file_size || 0),
    0
  );

  const encryptedFiles = files.filter(
    (file) => file.is_encrypted
  ).length;

  const latestFile =
    files.length > 0
      ? new Date(files[0].upload_date).toLocaleDateString()
      : "No uploads";

  const formatSize = (bytes) => {
    if (!bytes) return "0 B";

    const units = ["B", "KB", "MB", "GB"];

    let i = 0;

    while (bytes >= 1024 && i < units.length - 1) {
      bytes /= 1024;
      i++;
    }

    return `${bytes.toFixed(1)} ${units[i]}`;
  };

  return (
    <section className="stats-grid">

      <StatsCard
        icon={<FaFolderOpen />}
        title="Total Files"
        value={totalFiles}
        color="#3B82F6"
      />

      <StatsCard
        icon={<FaDatabase />}
        title="Storage Used"
        value={formatSize(totalStorage)}
        color="#10B981"
      />

      <StatsCard
        icon={<FaLock />}
        title="Encrypted Files"
        value={encryptedFiles}
        color="#8B5CF6"
      />

      <StatsCard
        icon={<FaCalendarAlt />}
        title="Last Upload"
        value={latestFile}
        color="#F59E0B"
      />

    </section>
  );
}

export default StatsCards;