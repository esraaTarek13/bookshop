import { Field, Formik, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { loginSchema } from "../../../Validation/LoginSchema";
import { UseLogin } from "../../../Hooks/UseLogin";
import AuthButton from './../Buttons/AuthButton';


// Login Form
export default function InputsForm() {
  const [showPassword, setShowPassword] = useState(false)
  const {mutate} = UseLogin();

  return (
    <div className="w-full">
      <Formik initialValues={{ email: "", password: "", checked: false }} validationSchema={loginSchema} onSubmit={(values) => { mutate(values) }}>
        <Form>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) text-[18px]">Email</label>
            <Field name="email" type="email" id="email" placeholder="example@gmail.com"
              className="border border-[#22222233] rounded-(--btn-radius) p-4 outline-0 bg-(--secondary-text-color)" />
            <ErrorMessage name="email" component="p" className="text-(--btn-color) text-sm mt-1" />
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <label htmlFor="password" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) text-[18px]">Password</label>
            <div className="bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 flex justify-between items-center ">
              <Field name="password" type={showPassword ? "text" : "password"} id="password" placeholder="Enter password" className="w-full border-0 outline-0" />
              {showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="text-[#878A99] cursor-pointer" />
                : <FaEye onClick={() => setShowPassword(!showPassword)} className="text-[#878A99] cursor-pointer" />}
            </div>
            <ErrorMessage name="password" component="p" className="text-(--btn-color) text-sm mt-1" />
          </div>

          <div className="pt-4 flex justify-between">
            <div className="flex gap-2">
              <Field name="checked" type="checkbox" id="checked" />
              <label htmlFor="checked">Remember me</label>
            </div>
            <Link to="/forget-password" className="text-(--btn-color)">Forget password?</Link>
          </div>

          {/* Login Button */}
          <AuthButton />
        </Form>
      </Formik>
    </div>
  )
}
