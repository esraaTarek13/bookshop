import * as yup from "yup";

// Form Validation
export const loginSchema = yup.object({
    email: yup
      .string()
      .required("*Email is required")
      .email("*Please enter a valid email"),
    password: yup
      .string()
      .required("*Password is required"),
    checked: yup
      .boolean()
      .oneOf([true])
  })
