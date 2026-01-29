import axiosInstance from "./AxiosInstance"
import Cookies from 'js-cookie';

export const LoginApi = async (values) => {
    const res = await axiosInstance.post("/login", values);
    Cookies.set("token", res.data.data.token, {
        expires: 7,         
        secure: true,        
        sameSite: "Strict"   
    });
    return res;
};

export const RegisterApi = (values) => {
    return axiosInstance.post("/register", values);
};
