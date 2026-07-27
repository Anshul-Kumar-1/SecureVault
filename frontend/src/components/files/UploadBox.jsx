import { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import toast from "react-hot-toast";

import { validateFile } from "../../utils/fileValidator";
import Button from "../common/Button";
import FilePreview from "./FilePreview";

import fileService from "../../services/fileService";
import useAuth from "../../hooks/useAuth";

import "./UploadBox.css";

function UploadBox() {
  const { token } = useAuth();

  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Open file picker
  const handleBrowse = () => {
    inputRef.current.click();
  };

  // Drag Over
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Drag Leave
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Drop File
  const handleDrop = (e) => {
    e.preventDefault();

    setIsDragging(false);

    const file = e.dataTransfer.files[0];

    const result = validateFile(file);

    if (!result.valid) {
      toast.error(result.message);
      return;
    }

    setSelectedFile(file);
    setUploadComplete(false);
  };

  // Browse File
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const result = validateFile(file);

    if (!result.valid) {
      toast.error(result.message);
      return;
    }

    setSelectedFile(file);
    setUploadComplete(false);
  };

  // Remove File
  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadComplete(false);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  // Upload File
  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file.");
      return;
    }

    try {
      setUploading(true);

      const response = await fileService.uploadFile(
        selectedFile,
        token
      );

      toast.success(response.message);

      setUploadComplete(true);

      setSelectedFile(null);

      if (inputRef.current) {
        inputRef.current.value = "";
      }

    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Upload failed."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <section
        className={`upload-box ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <FaCloudUploadAlt className="upload-icon" />

        <h2>Drag & Drop your files here</h2>

        <p>or</p>

        <button
          type="button"
          className="browse-btn"
          onClick={handleBrowse}
        >
          Browse Files
        </button>

        <span>Supported: PDF, DOCX, PNG, JPG</span>

        <span>Maximum Size: 50 MB</span>

        <input
          ref={inputRef}
          type="file"
          hidden
          onChange={handleFileChange}
        />
      </section>

      {selectedFile && (
        <>
          <FilePreview
            file={selectedFile}
            onRemove={handleRemoveFile}
          />

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="upload-actions">

              {!uploading && (
                <Button onClick={handleUpload}>
                  Upload File
                </Button>
              )}

              {uploading && (
                <Button disabled>
                  Uploading...
                </Button>
              )}

            </div>
          </div>
        </>
      )}

      {uploadComplete && (
        <div
          className="encrypt-success"
          style={{
            marginTop: "25px",
            textAlign: "center",
          }}
        >
          <h3>✅ Upload Successful</h3>

          <p>
            Your file has been uploaded, encrypted using
            AES-256 and stored securely.
          </p>
        </div>
      )}
    </>
  );
}

export default UploadBox;