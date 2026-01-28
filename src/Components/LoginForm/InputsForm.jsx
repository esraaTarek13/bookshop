import { Field, Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import * as yup from "yup";
import { useState } from "react";
import AuthButton from "../Ui/AuthButton";

// Login Form
export default function InputsForm() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  // Post Data
  const handleLogin = async (values) => {
    try {
      const res = await axios.post("https://bookstore.eraasoft.pro/api/login", values)
      navigate("/")
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // Form Validation
  const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    checked: yup.boolean().oneOf([true])
  })


  return (
    <div className="w-full">
      <Formik initialValues={{ email: "", password: "", checked: false }} validationSchema={loginSchema} onSubmit={(values) => { handleLogin(values) }}>
        <Form>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) text-[18px]">Email</label>
            <Field name="email" type="email" id="email" placeholder="example@gmail.com"
              className="border border-[#22222233] rounded-(--btn-radius) p-4 outline-0 bg-(--secondary-text-color)" />
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <label htmlFor="password" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) text-[18px]">Password</label>
            <div className="bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 flex justify-between items-center ">
              <Field name="password" type={showPassword ? "text" : "password"} id="password" placeholder="Enter password" className="w-full border-0 outline-0" />
              {showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="text-[#878A99] cursor-pointer" /> : <FaEye onClick={() => setShowPassword(!showPassword)} className="text-[#878A99] cursor-pointer" />}
            </div>
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
