import * as Yup from "yup";

// Profile Schema
export const ProfileSchema = Yup.object({
    address: Yup.string()
        .nullable()
        .test(
            "valid-address",
            "Address must contain only letters and numbers, and be long enough",
            (value) => {
                if (!value) return true;
                return (
                    /^[a-zA-Z0-9\u0600-\u06FF\s]+$/.test(value) &&
                    value.trim().split(/\s+/).length >= 3
                );
            }
        ),

    phone: Yup.string()
        .nullable()
        .test(
            "valid-phone",
            "Phone number is invalid",
            (value) => {
                if (!value) return true;
                return /^[0-9]+$/.test(value) && value.length >= 10 && value.length <= 15;
            }
        ),
});
