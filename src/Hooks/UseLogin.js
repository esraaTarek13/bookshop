import { useMutation } from "@tanstack/react-query"
import { LoginApi } from "../Api/AuthApi"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../Stores/useAuthStore";
import { toast } from "react-hot-toast";

// Custom hook to handle login, store token, and navigate on success
export const UseLogin = () => {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login)

    return useMutation({
        mutationFn: LoginApi,
        onMutate: () => {
            toast.loading("Logging in...");
        },
        onSuccess: (res, values) => {
            toast.dismiss();

            const token = res.data.data.token
            const user = res.data.data.user
            const rememberMe = values.checked;
            login(token, user, rememberMe)
            
            navigate("/", { replace: true })
        },
        onError: (error) => {
            toast.dismiss();
            const message = error.response?.data?.message || "Login failed";
            toast.error(message);
        }
    })
}
