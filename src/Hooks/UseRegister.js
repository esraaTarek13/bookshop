import { useMutation } from "@tanstack/react-query"
import { RegisterApi } from "../Api/AuthApi"
import { useNavigate } from "react-router-dom"

export const UseRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: RegisterApi,
    onSuccess: () => {
      navigate("/login")
    },
    onError: (error) => {
      console.log("Login failed", error.response?.data?.message);
    }
  })
}
