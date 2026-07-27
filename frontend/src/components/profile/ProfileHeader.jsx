import {
  FaUserCircle,
  FaCheckCircle,
  FaFolder,
  FaLock,
  FaDatabase,
} from "react-icons/fa";

function ProfileHeader({ user, files = [], onEdit }) {
  const totalFiles = files.length;

  const encryptedFiles = files.filter(
    (file) => file.is_encrypted
  ).length;

  const storage = files.reduce(
    (sum, file) => sum + file.file_size,
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
    <div className="profile-hero">

      <FaUserCircle className="profile-avatar" />

      <h2>{user?.name}</h2>

      <p>{user?.email}</p>

      <div className="account-status">
        <FaCheckCircle />
        Active Account
      </div>

      <div className="hero-stats">

        <div>
          <FaFolder />
          <span>{totalFiles}</span>
          <small>Files</small>
        </div>

        <div>
          <FaLock />
          <span>{encryptedFiles}</span>
          <small>Encrypted</small>
        </div>

        <div>
          <FaDatabase />
          <span>{formatSize(storage)}</span>
          <small>Storage</small>
        </div>

      </div>

      <button
        className="edit-profile-btn"
        onClick={onEdit}
      >
        Edit Profile
      </button>

    </div>
  );
}

export default ProfileHeader;