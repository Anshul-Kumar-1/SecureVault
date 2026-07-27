import api from "./api";

const fileService = {
  // Upload File
  uploadFile: async (file, token) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post(
      "/files/upload",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  // Get All Files
  getFiles: async (token) => {
    const response = await api.get("/files", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  // Download File
  downloadFile: async (id, token) => {
    const response = await api.get(`/files/download/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });

    return response;
  },

  // Delete File
  deleteFile: async (id, token) => {
    const response = await api.delete(`/files/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },
};

export default fileService;