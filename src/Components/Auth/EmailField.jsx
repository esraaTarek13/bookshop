import { Field, ErrorMessage } from "formik";

export default function EmailField({ name, id, label, placeholder }) {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) md:text-lg"
            >
                {label}
            </label>

            <Field
                name={name}
                type="text"
                id={id}
                placeholder={placeholder}
                className="border border-[#22222233] rounded-(--btn-radius) p-4 outline-0 bg-(--secondary-text-color) text-sm md:text-base"
            />

            <ErrorMessage
                name={name}
                component="p"
                className="text-(--btn-color) text-sm mt-1"
            />
        </div>
    );
}
