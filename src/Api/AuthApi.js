import axiosInstance from "./AxiosInstance"
import { useAuthStore } from './../Stores/useAuthStore';

export const RegisterApi = (values) => {
    return axiosInstance.post("/register", values);
};

export const LoginApi = (values) => {
    return axiosInstance.post("/login", values);
};


export const ForgetPasswordApi = (values) => {
    return axiosInstance.post("/forget-password", values)
}


export const logOutApi = () => {
    const token = useAuthStore.getState().token;
    
    return axiosInstance.post("/logout", null, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
} 