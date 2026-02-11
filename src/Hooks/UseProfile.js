import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { profileApi, updateProfileApi } from "../Api/ProfileApi"
import toast from "react-hot-toast";

// Add React Query hooks for fetching and updating profile
export const useProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: profileApi,
        select: (res) => res.data.data,
    })
}

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProfileApi,

        onMutate: () => {
            toast.loading("Updating profile...");
        },

        onSuccess: (res) => {
            toast.dismiss();
            queryClient.invalidateQueries({ queryKey: ["profile"] })

            const updateUser = res.data.data;
            localStorage.setItem("user", JSON.stringify(updateUser))

            toast.success(
                res?.data?.data?.message || "Profile Data Updated successfully"
            );
        },

        onError: (error) => {
            toast.dismiss();
            toast.error(
                error?.response?.data?.message || "Profile Data Updated successfully"
            );
        }
    })
}