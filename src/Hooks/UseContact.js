import { useMutation } from "@tanstack/react-query"
import { ContactApi } from "../Api/ContactApi";
import toast from "react-hot-toast";

// Custom hook to send contact messages with success/error toasts
export const UseContact = () => {

    return useMutation({
        mutationFn: ContactApi,
        onSuccess: (res) => {
            const message = res.data?.message || "Message sent successfully";
            toast.success(message)
        },
        onError: (error) => {
            const message = error.response?.data?.message || "Failed to send message";
            toast.error(message)
        }
    })
}
