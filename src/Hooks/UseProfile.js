import { useQuery } from "@tanstack/react-query"
import { profileApi } from "../Api/ProfileApi"

export const useProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: profileApi,
        onError: (error) => {
            console.log(error);
        },
    })
}