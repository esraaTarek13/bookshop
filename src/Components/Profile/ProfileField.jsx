import { Field } from "formik"

// Reusable input field for profile form
export default function ProfileField({ label, name, id, type = "text" }) {
    return (
        <>
            <label htmlFor={id} className="cursor-pointer text-(--main-text-color-light) md:text-sm">
                {label}
            </label>
            <Field name={name} type={type} id={id}
                className="text-sm md:text-base bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 outline-0" />
        </>
    )
}
