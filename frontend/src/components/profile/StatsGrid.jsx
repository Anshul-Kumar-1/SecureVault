import {
  FaFolder,
  FaLock,
  FaDatabase,
  FaCalendarAlt,
} from "react-icons/fa";

function StatsGrid({ files }) {
  const totalFiles = files.length;

  const encryptedFiles = files.filter(
    (file) => file.is_encrypted
  ).length;

  const storage = files.reduce(
    (total, file) => total + file.file_size,
    0
  );

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
    <div className="profile-stats">

      <div className="profile-stat-card">
        <FaFolder />
        <h3>{totalFiles}</h3>
        <span>Total Files</span>
      </div>

      <div className="profile-stat-card">
        <FaLock />
        <h3>{encryptedFiles}</h3>
        <span>Encrypted</span>
      </div>

      <div className="profile-stat-card">
        <FaDatabase />
        <h3>{formatSize(storage)}</h3>
        <span>Storage Used</span>
      </div>

      <div className="profile-stat-card">
        <FaCalendarAlt />
        <h3>2026</h3>
        <span>Member Since</span>
      </div>

    </div>
  );
}

export default StatsGrid;