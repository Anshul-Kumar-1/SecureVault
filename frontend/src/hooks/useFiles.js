import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import fileService from "../services/fileService";
import useAuth from "./useAuth";

function useFiles() {
  const { token } = useAuth();

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFiles = useCallback(async () => {
    if (!token) return;

    try {
      setLoading(true);

      const response = await fileService.getFiles(token);

      setFiles(response.data);

    } catch (error) {
      console.error(error);
      toast.error("Failed to load files");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadFiles();
  }, [loadFiles]);

  return {
    files,
    loading,
    reloadFiles: loadFiles,
  };
}

export default useFiles;