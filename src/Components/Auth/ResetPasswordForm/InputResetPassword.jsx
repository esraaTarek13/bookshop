import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { ResetPasswordSchema } from "../../../Validation/ResetPasswordSchema";
import { useState } from "react";
import AuthButton from "../Buttons/AuthButton";

export default function InputResetPassword() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <Formik>
            <Form>
                <div className="flex flex-col gap-2 mt-6">
                    <label htmlFor="password" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) md:text-lg">Password</label>
                    <div className="bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 flex justify-between items-center ">
                        <Field name="password" type={showPassword ? "text" : "password"} id="password" placeholder="Enter password"
                            className="text-sm md:text-base w-full border-0 outline-0" />
                        {showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="text-[#878A99] cursor-pointer" />
                            : <FaEye onClick={() => setShowPassword(!showPassword)}
                                className="text-[#878A99] cursor-pointer" />}
                    </div>
                    <ErrorMessage name="password" component="p" className="text-(--btn-color) text-sm mt-1" />
                </div>

                <div className="flex flex-col gap-2 mt-6">
                    <label htmlFor="confirmationPassword" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) md:text-lg">Confirm password</label>
                    <div className="bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 flex justify-between items-center ">
                        <Field name="password_confirmation" type={showConfirmPassword ? "text" : "password"} id="confirmationPassword" placeholder="Enter password"
                            className="text-sm md:text-base w-full border-0 outline-0" />
                        {showConfirmPassword ? <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-[#878A99] cursor-pointer" />
                            : <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="text-[#878A99] cursor-pointer" />}
                    </div>
                    <ErrorMessage name="password_confirmation" component="p" className="text-(--btn-color) text-sm mt-1" />
                </div>

                <div className="flex gap-2 pt-4">
                    <Field name="checked" type="checkbox" id="checkedRememberMe" />
                    <label htmlFor="checkedRememberMe">Remember me</label>
                </div>

                <AuthButton />
            </Form>
        </Formik>
    )
}
