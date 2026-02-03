import * as yup from "yup";

export const OtpSchema = yup.object({
  otp: yup
    .string()
    .required("OTP is required")
    .length(4, "OTP must be 4 digits"),
});