import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { profileApi, updateProfileApi } from "../Api/ProfileApi"
import toast from "react-hot-toast";

// Add React Query hooks for fetching and updating profile
export const useProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: profileApi,
        select: (res) => res.data.data,
        onError: (error) => {
            console.log(error);
        },
    })
}

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProfileApi,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["profile"] })

            toast.success(
                data?.data?.message || "Profile Data Updated successfully"
            );
        },
        onError: (error) => {
            toast.error(
                error?.response?.data?.message || "Failed to update profile"
            );
        }
    })
}