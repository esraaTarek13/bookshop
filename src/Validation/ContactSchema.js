import * as yup from "yup";

// Contact Validation
export const ContactSchema = yup.object({
    name: yup
        .string()
        .required("*Name is required"),
    email: yup
        .string()
        .required("*Email is required")
        .email("*Please enter a valid email"),
    message: yup
        .string()
        .required("*Enter your message"),
});
