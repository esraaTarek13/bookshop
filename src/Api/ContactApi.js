import axiosInstance from "./AxiosInstance"

export const ContactApi = (values) => {
    return axiosInstance.post("/contacts/store", values);
};
