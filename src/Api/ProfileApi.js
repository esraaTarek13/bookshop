import axiosInstance from './AxiosInstance';
import Cookies from 'js-cookie';

export const profileApi = () => {
    const token = Cookies.get("token")

    return axiosInstance.get("/profile", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}