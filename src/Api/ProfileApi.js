import axiosInstance from './AxiosInstance';
import Cookies from 'js-cookie';

// Add API calls for fetching and updating user data
export const profileApi = () => {
    const token = Cookies.get("token");

    return axiosInstance.get("/profile", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const updateProfileApi = (values) => {
    const token = Cookies.get("token");

    return axiosInstance.post("/profile/update", values, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
