import {
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaFileAlt,
  FaTimes,
} from "react-icons/fa";

import "./FilePreview.css";

function FilePreview({ file, onRemove }) {

  const getIcon = () => {

    if (!file) return <FaFileAlt />;

    const type = file.type;

    if (type.includes("pdf"))
      return <FaFilePdf />;

    if (type.includes("word"))
      return <FaFileWord />;

    if (type.includes("image"))
      return <FaFileImage />;

    return <FaFileAlt />;

  };

  const formatSize = (bytes) => {

    return (bytes / (1024 * 1024)).toFixed(2) + " MB";

  };

  return (

    <div className="file-preview">

      <div className="file-preview__icon">

        {getIcon()}

      </div>

      <div className="file-preview__info">

        <h3>{file.name}</h3>

        <p>{file.type || "Unknown File"}</p>

        <span>{formatSize(file.size)}</span>

      </div>

      <button
        className="remove-file-btn"
        onClick={onRemove}
      >

        <FaTimes />

      </button>

    </div>

  );

}

export default FilePreview;