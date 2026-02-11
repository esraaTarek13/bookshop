import { Field, ErrorMessage } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

export default function MainField({ name, type, id, label, placeholder, fn, readOnly }) {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col gap-2 mb-3">
            <label
                htmlFor={id}
                className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) md:text-lg">
                {label}
            </label>

            <div
                className="bg-white border border-[#22222233] rounded-(--btn-radius) p-4 flex justify-between items-center">
                <Field
                    name={name}
                    type={type === "password" ? (show ? "text" : "password") : type}
                    id={id}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    className="bg-white text-sm md:text-base text-(--main-text-color) w-full border-0 outline-0"
                />

                {fn ?
                    show ? (
                        <FaEyeSlash onClick={() => setShow(!show)} className="text-[#878A99] text-lg cursor-pointer" />
                    ) : (
                        <FaEye onClick={() => setShow(!show)} className="text-[#878A99] text-lg cursor-pointer" />
                    )
                    : null}
            </div>
            <div className="h-5 mb-2">
                <ErrorMessage name={name} component="p" className="text-(--btn-color) text-sm" />
            </div>
        </div>
    );
}
