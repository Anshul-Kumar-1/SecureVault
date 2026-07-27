import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import FileTable from "../components/files/FileTable";

import fileService from "../services/fileService";
import useAuth from "../hooks/useAuth";

function MyFiles() {
  const { token } = useAuth();

  const [files, setFiles] = useState([]);

 const loadFiles = async () => {
  try {
    const response = await fileService.getFiles(token);

    console.log("Response:", response);

    setFiles(response.data);

  } catch (error) {
    console.error(error);
    toast.error("Failed to load files");
  }
};

useEffect(() => {
  if (token) {
    loadFiles();
  } 
}, [token]);

useEffect(() => {
  console.log("Updated files:", files);
}, [files]);

 const handleDownload = async (id) => {
  try {
    const response = await fileService.downloadFile(id, token);

    const blob = new Blob([response.data]);

    const url = window.URL.createObjectURL(blob);

    let fileName = "download";

    const disposition = response.headers["content-disposition"];

    if (disposition) {
      const match = disposition.match(/filename="?(.+?)"?$/);

      if (match) {
        fileName = match[1];
      }
    }

    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);

    toast.success("Download started");

  } catch (error) {
    console.error(error);
    toast.error("Download failed");
  }
};

    // We'll implement next


  const handleDelete = async (id) => {
    if (!window.confirm("Delete this file?"))
      return;

    try {
      await fileService.deleteFile(id, token);

      toast.success("File deleted");

      loadFiles();

    } catch {
      toast.error("Delete failed");
    }
  };
  console.log("files state:", files);
  return (
    <DashboardLayout>
      <DashboardHeader title="My Files" />

      <FileTable
        files={files}
        onDownload={handleDownload}
        onDelete={handleDelete}
      />
    </DashboardLayout>
  );
}



export default MyFiles;