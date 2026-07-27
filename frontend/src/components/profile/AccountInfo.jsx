import { FaUser, FaEnvelope, FaShieldAlt } from "react-icons/fa";

function AccountInfo({ user, onEdit }) {
  return (
    <div className="account-info">
      <h2>Account Information</h2>

      <div className="info-row">
        <FaUser />
        <div>
          <span>Full Name</span>
          <p>{user?.name}</p>
        </div>
      </div>

      <div className="info-row">
        <FaEnvelope />
        <div>
          <span>Email</span>
          <p>{user?.email}</p>
        </div>
      </div>

      <div className="info-row">
        <FaShieldAlt />
        <div>
          <span>Role</span>
          <p>User</p>
        </div>
      </div>

      
    </div>
  );
}

export default AccountInfo;
