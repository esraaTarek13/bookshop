import { Field, Form, Formik, ErrorMessage } from "formik";
import AuthButton from "../Ui/AuthButton";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { registerSchema } from "../../Validation/RegisterSchema";
import { UseRegister } from "../../Hooks/UseRegister";

// Register Form
export default function InputsForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const {mutate} = UseRegister();

    return (
        <div className="w-full">
            <Formik initialValues={{ first_name: "", last_name: "", email: "", password: "", password_confirmation: "", agree: false }}
                validationSchema={registerSchema} onSubmit={(values) => { mutate(values) }}>
                <Form>
                    <div className="w-full md:flex gap-4">
                        <div className="flex flex-col gap-2 md:w-[50%]">
                            <label htmlFor="fristName" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) text-[18px]">First Name</label>
                            <Field name="first_name" type="text" id="fristName" placeholder="John" className="bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 outline-0" />
                            <ErrorMessage name="first_name" component="p" className="text-(--btn-color) text-sm mt-1" />
                        </div>
                        <div className="flex flex-col gap-2 md:w-[50%] mt-6 md:mt-0">
                            <label htmlFor="lastName" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) text-[18px]">Last Name</label>
                            <Field name="last_name" type="text" id="lastName" placeholder="Smith" className="bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 outline-0" />
                            <ErrorMessage name="last_name" component="p" className="text-(--btn-color) text-sm mt-1" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-6">
                        <label htmlFor="email" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) text-[18px]">Email</label>
                        <Field name="email" type="email" id="email" placeholder="example@gmail.com"
                            className="bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 outline-0" />
                        <ErrorMessage name="email" component="p" className="text-(--btn-color) text-sm mt-1" />
                    </div>

                    <div className="flex flex-col gap-2 mt-6">
                        <label htmlFor="password" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) text-[18px]">Password</label>
                        <div className="bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 flex justify-between items-center ">
                            <Field name="password" type={showPassword ? "text" : "password"} id="password" placeholder="Enter password" className="w-full border-0 outline-0" />
                            {showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="text-[#878A99] cursor-pointer" /> : <FaEye onClick={() => setShowPassword(!showPassword)} className="text-[#878A99] cursor-pointer" />}
                        </div>
                        <ErrorMessage name="password" component="p" className="text-(--btn-color) text-sm mt-1" />
                    </div>

                    <div className="flex flex-col gap-2 mt-6">
                        <label htmlFor="confirmationPassword" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) text-[18px]">Confirm password</label>
                        <div className="bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 flex justify-between items-center ">
                            <Field name="password_confirmation" type={showConfirmPassword ? "text" : "password"} id="confirmationPassword" placeholder="Enter password" className="w-full border-0 outline-0" />
                            {showConfirmPassword ? <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-[#878A99] cursor-pointer" /> : <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-[#878A99] cursor-pointer" />}
                        </div>
                        <ErrorMessage name="password_confirmation" component="p" className="text-(--btn-color) text-sm mt-1" />
                    </div>

                    <div className="flex gap-2 pt-4">
                        <Field name="agree" type="checkbox" id="agree" />
                        <label htmlFor="agree">Agree with<span className="text-(--btn-color)"> Terms & Conditions</span></label>
                    </div>
                        <ErrorMessage name="agree" component="p" className="text-(--btn-color) text-sm mt-1" />

                    {/* Signup Button */}
                    <AuthButton />
                </Form>
            </Formik>
        </div>
    )
}







