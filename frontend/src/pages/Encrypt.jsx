import { useState } from "react";
import { FaLock, FaUpload, FaFileAlt } from "react-icons/fa";
import toolService from "../services/toolService";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import FileDropzone from "../components/files/FileDropzone";

import "./Encrypt.css";

function Encrypt() {
  const [file, setFile] = useState(null);
  const { token } = useAuth();
  const [encryptedBlob, setEncryptedBlob] = useState(null);
  const [downloadName, setDownloadName] = useState("");

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);

      setEncryptedBlob(null);

      setDownloadName("");
    }
  };

  const handleEncrypt = async () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    try {
      setLoading(true);

      const response = await toolService.encryptFile(file, token);

      const blob = response.data;

      setEncryptedBlob(blob);
      setDownloadName(file.name + ".enc");

      toast.success("File encrypted successfully");
    } catch (error) {
      console.error(error);

      toast.error("Encryption failed");
    } finally {
      setLoading(false);
    }
  };
  const handleDownload = () => {
    if (!encryptedBlob) return;

    const url = window.URL.createObjectURL(encryptedBlob);

    const link = document.createElement("a");

    link.href = url;

    link.download = downloadName;

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);
  };
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
    <DashboardLayout>
      <DashboardHeader />

      <section className="encrypt-page">
        <div className="encrypt-card">
          <div className="encrypt-title">
            <FaLock />

            <h2>Encrypt File</h2>

            <p>Protect your files using AES-256 encryption.</p>
          </div>

          <FileDropzone onFileSelect={setFile} />

          {file && (
            <div className="selected-file">
              <FaFileAlt />

              <div>
                <h4>{file.name}</h4>

                <span>{formatSize(file.size)}</span>
              </div>
            </div>
          )}

          <div className="algorithm-box">
            <h4>Encryption Algorithm</h4>

            <p>AES-256 CBC</p>
          </div>

          <button
            className="encrypt-btn"
            disabled={!file || loading}
            onClick={handleEncrypt}
          >
            {loading ? "Encrypting..." : "Encrypt File"}
          </button>
          {encryptedBlob && (
            <div className="success-card">
              <h3>✅ Encryption Successful</h3>

              <p>{downloadName}</p>

              <button className="download-btn" onClick={handleDownload}>
                Download Encrypted File
              </button>
            </div>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Encrypt;
