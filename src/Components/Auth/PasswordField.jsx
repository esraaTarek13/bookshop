import { Field, ErrorMessage } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

export default function PasswordField({ name, id, label, placeholder }) {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col gap-2 mt-6">
            <label
                htmlFor={id}
                className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) md:text-lg">
                {label}
            </label>
            <div
                className="bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 flex justify-between items-center">
                <Field
                    name={name}
                    type={show ? "text" : "password"}
                    id={id}
                    placeholder={placeholder}
                    className="text-sm md:text-base w-full border-0 outline-0"
                />
                {show ? (
                    <FaEyeSlash onClick={() => setShow(!show)} className="text-[#878A99] cursor-pointer" />
                ) : (
                    <FaEye onClick={() => setShow(!show)} className="text-[#878A99] cursor-pointer" />
                )}
            </div>
            <ErrorMessage name={name} component="p" className="text-(--btn-color) text-sm mt-1" />
        </div>
    );
}
