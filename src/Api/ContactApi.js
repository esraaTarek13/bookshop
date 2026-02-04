import axiosInstance from "./AxiosInstance"

// Contact API for About page
export const ContactApi = (values) => {
    return axiosInstance.post("/contacts/store", values);
};
