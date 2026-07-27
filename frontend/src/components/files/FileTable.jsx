import "./FileTable.css";

function FileTable({
  files = [],
  onDownload,
  onDelete,
})
 {
   
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;

    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(2)} KB`;

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  if (!files.length) {
    return (
      <div className="empty-files">
        <h3>No files uploaded yet.</h3>
        <p>Upload your first secure file.</p>
      </div>
    );
  }

  return (
    <table className="file-table">
      <thead>
        <tr>
          <th>File Name</th>
          <th>Size</th>
          <th>Type</th>
          <th>Uploaded</th>
          <th>Encrypted</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {files.map((file) => (
          <tr key={file.id}>
            <td>{file.original_name}</td>

            <td>{formatFileSize(file.file_size)}</td>

            <td>{file.mime_type}</td>

            <td>{formatDate(file.upload_date)}</td>

            <td>
              {file.is_encrypted ? "🔒 Yes" : "❌ No"}
            </td>

            <td>
              <button
                className="download-btn"
                onClick={() => onDownload(file.id)}
              >
                Download
              </button>

              <button
                className="delete-btn"
                onClick={() => onDelete(file.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FileTable;