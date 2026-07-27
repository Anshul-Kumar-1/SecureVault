import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/tools";

const toolService = {

    encryptFile(file, token) {

        const formData = new FormData();

        formData.append("file", file);

        return axios.post(
            `${API_URL}/encrypt`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                },
                responseType: "blob"
            }
        );

    },

    decryptFile(file, token) {

        const formData = new FormData();

        formData.append("file", file);

        return axios.post(
            `${API_URL}/decrypt`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                },
                responseType: "blob"
            }
        );

    }

};

export default toolService;