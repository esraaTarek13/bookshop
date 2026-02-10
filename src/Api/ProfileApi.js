import axiosInstance from './AxiosInstance';
import { useAuthStore } from './../Stores/useAuthStore';

// Add API calls for fetching and updating user data
export const profileApi = () => {
    const token = useAuthStore.getState().token;

    return axiosInstance.get("/profile", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const updateProfileApi = (values) => {
    const token = useAuthStore.getState().token;

    return axiosInstance.post("/profile/update", values, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
