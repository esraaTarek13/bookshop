import axiosInstance from "./AxiosInstance"
import Cookies from 'js-cookie';

export const RegisterApi = (values) => {
    return axiosInstance.post("/register", values);
};

export const LoginApi = (values) => {
    return axiosInstance.post("/login", values);
};


export const ForgetPasswordApi = (values) => {
    return axiosInstance.post("/forget-password", values)
}


const token = Cookies.get("token")
export const logOutApi = () => {
    return axiosInstance.post("/logout", null, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
} 