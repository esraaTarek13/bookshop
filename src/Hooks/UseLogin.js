import { useMutation } from "@tanstack/react-query"
import { LoginApi } from "../Api/AuthApi"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../Stores/useAuthStore";
import { toast } from "react-hot-toast";

export const UseLogin = () => {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login)

    return useMutation({
        mutationFn: LoginApi,
        onSuccess: (res) => {
            const token = res.data.data.token
            login(token)
            navigate("/", { replace: true })
        },
        onError: (error) => {
            const message = error.response?.data?.message || "Login failed";
            toast.error(message);
        }
    })
}
