import { Field, ErrorMessage } from "formik";

export default function TextField({ name, id, label, placeholder, type = "text" }) {
    return (
        <>
            <label
                htmlFor={id}
                className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) md:text-lg"            >
                {label}
            </label>

            <Field
                name={name}
                type={type}
                id={id}
                placeholder={placeholder}
                className="text-sm md:text-base bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 outline-0"
            />

            <ErrorMessage
                name={name}
                component="p"
                className="text-(--btn-color) text-sm mt-1"
            />
        </>
    );
}
