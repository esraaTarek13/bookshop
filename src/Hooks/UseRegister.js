import { useMutation } from "@tanstack/react-query"
import { RegisterApi } from "../Api/AuthApi"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";

// Custom hook to handle user registration and navigate on success
export const UseRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: RegisterApi,
    onMutate: () => {
      toast.loading("Registering user...");
    },
    onSuccess: () => {
      navigate("/login" , {replace: true})
    },
    onError: (error) => {
      toast.dismiss();
      toast.error( error.response?.data?.message || "Login failed")
    }
  })
}
