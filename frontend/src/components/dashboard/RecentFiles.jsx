import {
  FaDownload,
  FaTrash,
  FaLock,
  FaLockOpen,
} from "react-icons/fa";

import "./RecentFiles.css";

const files = [
  {
    id: 1,
    name: "Resume.pdf",
    status: "Encrypted",
    size: "2.4 MB",
    date: "Today",
  },
  {
    id: 2,
    name: "Notes.docx",
    status: "Decrypted",
    size: "850 KB",
    date: "Yesterday",
  },
  {
    id: 3,
    name: "Image.png",
    status: "Encrypted",
    size: "4.1 MB",
    date: "10 Jul",
  },
];

function RecentFiles() {
  return (
    <section className="recent-files">

      <div className="section-header">
        <h2>Recent Files</h2>
        <p>Your latest uploaded files.</p>
      </div>

      <table>

        <thead>

          <tr>
            <th>File Name</th>
            <th>Status</th>
            <th>Size</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {files.map((file) => (

            <tr key={file.id}>

              <td>{file.name}</td>

              <td>

                {file.status === "Encrypted" ? (
                  <span className="encrypted">
                    <FaLock />
                    Encrypted
                  </span>
                ) : (
                  <span className="decrypted">
                    <FaLockOpen />
                    Decrypted
                  </span>
                )}

              </td>

              <td>{file.size}</td>

              <td>{file.date}</td>

              <td>

                <button className="table-btn">
                  <FaDownload />
                </button>

                <button className="table-btn delete">
                  <FaTrash />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}

export default RecentFiles;