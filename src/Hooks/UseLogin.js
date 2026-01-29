import { useMutation } from "@tanstack/react-query"
import { LoginApi } from "../Api/AuthApi"
import { useNavigate } from "react-router-dom"

export const UseLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: LoginApi,
        onSuccess: () => {
            navigate("/")
        },
        onError: (error) => {
            console.log("Login failed", error.response?.data?.message);
        }
    })
}
