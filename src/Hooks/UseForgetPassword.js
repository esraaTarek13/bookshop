import { useMutation } from "@tanstack/react-query"
import { ForgetPasswordApi } from "../Api/AuthApi"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Custom hook to handle forget password requests
export const UseForgetPassword = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: ForgetPasswordApi,

        onMutate: () => {
            toast.loading("Sending OTP to your email...");
        },

        onSuccess: () => {
            toast.dismiss();
            navigate("/add-code")
        },

        onError: (error) => {
            toast.dismiss();
            const message = error.response?.data?.errors?.email || "The selected email is invalid.";
            toast.error(message);
        }
    })
}