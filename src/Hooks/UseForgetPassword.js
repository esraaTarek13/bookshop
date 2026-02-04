import { useMutation } from "@tanstack/react-query"
import { ForgetPasswordApi } from "../Api/AuthApi"
import { useNavigate } from "react-router-dom";

// Custom hook to handle forget password requests
export const UseForgetPassword = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: ForgetPasswordApi,
        onSuccess: () => {
            navigate("/add-code")
        },
        onError: (error) => {
            console.log(error);
        }
    })
}