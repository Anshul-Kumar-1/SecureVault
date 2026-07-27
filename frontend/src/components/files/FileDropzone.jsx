import { useEffect, useRef, useState } from "react";
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFileImage,
  FaFileVideo,
  FaFileArchive,
  FaFileAlt,
  FaTimesCircle,
} from "react-icons/fa";
import toast from "react-hot-toast";

import "./FileDropzone.css";

function FileDropzone({
  onFileSelect,
  accept = "*",
  maxSize = 100 * 1024 * 1024, // 100 MB
}) {
  const inputRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Format file size
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

  // Return file icon
  const getFileIcon = (file) => {
    if (!file) return <FaFileAlt />;

    const type = file.type;
    const name = file.name.toLowerCase();

    if (type.includes("pdf")) return <FaFilePdf />;

    if (
      type.includes("word") ||
      name.endsWith(".doc") ||
      name.endsWith(".docx")
    ) {
      return <FaFileWord />;
    }

    if (
      type.includes("excel") ||
      name.endsWith(".xls") ||
      name.endsWith(".xlsx")
    ) {
      return <FaFileExcel />;
    }

    if (type.startsWith("image/")) return <FaFileImage />;

    if (type.startsWith("video/")) return <FaFileVideo />;

    if (
      name.endsWith(".zip") ||
      name.endsWith(".rar") ||
      name.endsWith(".7z")
    ) {
      return <FaFileArchive />;
    }

    return <FaFileAlt />;
  };

  // Handle file selection
  const handleFile = (file) => {
    if (!file) return;

    if (file.size > maxSize) {
      toast.error(`File size exceeds ${formatSize(maxSize)}.`);
      return;
    }

    setSelectedFile(file);

    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  // Input change
  const handleChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  // Drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Drag leave
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Drop file
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  // Remove file
  const removeFile = () => {
    setSelectedFile(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    if (onFileSelect) {
      onFileSelect(null);
    }
  };
  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    if (selectedFile.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }

    setPreview(null);
  }, [selectedFile]);

  return (
    <div className="file-dropzone-container">
      <div
        className={`dropzone ${isDragging ? "dragging" : ""}`}
        onClick={() => inputRef.current.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <FaCloudUploadAlt className="dropzone-icon" />

        <h3>{isDragging ? "Drop your file here" : "Drag & Drop your file"}</h3>

        <p>or click to browse</p>

        <input
          ref={inputRef}
          type="file"
          hidden
          accept={accept}
          onChange={handleChange}
        />
      </div>

      {selectedFile && (
        <div className="selected-file-card">
          <div className="file-icon">
            {preview ? (
              <img
                src={preview}
                alt={selectedFile.name}
                className="image-preview"
              />
            ) : (
              getFileIcon(selectedFile)
            )}
          </div>

          <div className="file-info">
            <h4>{selectedFile.name}</h4>
            <span>{formatSize(selectedFile.size)}</span>
          </div>

          <button
            type="button"
            className="remove-file-btn"
            onClick={removeFile}
          >
            <FaTimesCircle />
          </button>
        </div>
      )}
    </div>
  );
}

export default FileDropzone;
