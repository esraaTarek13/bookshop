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
        onSuccess: (res, values) => {
            const token = res.data.data.token
            const rememberMe = values.checked;
            login(token, rememberMe)
            navigate("/", { replace: true })
        },
        onError: (error) => {
            const message = error.response?.data?.message || "Login failed";
            toast.error(message);
        }
    })
}
