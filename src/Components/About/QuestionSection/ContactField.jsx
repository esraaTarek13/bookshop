import { ErrorMessage, Field } from "formik";


export default function ContactField({ name, placeholder, icon, isTextarea }) {
    return (
        <>
            <div className={`${isTextarea ? "items-start" : "items-center"} flex gap-3.5 bg-transparent border border-[#FFFFFF33] text-[#FFFFFF33] rounded-(--btn-radius) p-4 overflow-hidden`}>
                {icon}
                <Field
                    name={name}
                    as={isTextarea ? "textarea" : "input"}
                    type={isTextarea ? undefined : "text"}
                    placeholder={placeholder}
                    rows={isTextarea ? 5 : undefined}
                    className="w-full text-sm md:text-base text-[#FFFFFF] outline-0"
                />
            </div>
            <ErrorMessage name={name} component="p" className="text-(--btn-color) text-sm mt-1" />
        </>
    )
}
