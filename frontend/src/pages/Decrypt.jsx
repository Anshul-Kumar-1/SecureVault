import { useState } from "react";
import { FaUnlock, FaUpload, FaFileAlt } from "react-icons/fa";
import toolService from "../services/toolService";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import FileDropzone from "../components/files/FileDropzone";

import "./Encrypt.css";

function Decrypt() {
  const [file, setFile] = useState(null);
  const [resultBlob, setResultBlob] = useState(null);
  const [downloadName, setDownloadName] = useState("");
  const [loading, setLoading] = useState(false);

  const { token } = useAuth();

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);

      setResultBlob(null);

      setDownloadName("");
    }
  };

  const handleDecrypt = async () => {
    if (!file) {
      toast.error("Please select a file");

      return;
    }

    try {
      setLoading(true);

      const response = await toolService.decryptFile(file, token);

      const blob = response.data;

      setResultBlob(blob);

      let fileName = file.name;

      if (fileName.endsWith(".enc")) {
        fileName = fileName.slice(0, -4);
      }

      setDownloadName(fileName);

      toast.success("File decrypted successfully");
    } catch (error) {
      console.error(error);

      toast.error("Decryption failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!resultBlob) return;

    const url = window.URL.createObjectURL(resultBlob);

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
            <FaUnlock />

            <h2>Decrypt File</h2>

            <p>Restore your encrypted files using AES-256 decryption.</p>
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
            <h4>Decryption Algorithm</h4>

            <p>AES-256 CBC</p>
          </div>

          <button
            className="encrypt-btn"
            disabled={!file || loading}
            onClick={handleDecrypt}
          >
            {loading ? "Decrypting..." : "Decrypt File"}
          </button>

          {resultBlob && (
            <div className="success-card">
              <h3>✅ Decryption Successful</h3>

              <p>{downloadName}</p>

              <button className="download-btn" onClick={handleDownload}>
                Download Decrypted File
              </button>
            </div>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Decrypt;
