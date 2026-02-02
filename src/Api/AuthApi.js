import axiosInstance from "./AxiosInstance"


export const LoginApi = (values) => {
    return axiosInstance.post("/login", values);
};


export const RegisterApi = (values) => {
    return axiosInstance.post("/register", values);
};

export const ForgetPasswordApi = (values) => {
    return axiosInstance.post("/forget-password", values)
}