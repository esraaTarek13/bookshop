import { useMutation } from "@tanstack/react-query"
import { RegisterApi } from "../Api/AuthApi"
import { useNavigate } from "react-router-dom"

// Custom hook to handle user registration and navigate on success
export const UseRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: RegisterApi,
    onSuccess: () => {
      navigate("/login" , {replace: true})
    },
    onError: (error) => {
      console.log("Login failed", error.response?.data?.message);
    }
  })
}
