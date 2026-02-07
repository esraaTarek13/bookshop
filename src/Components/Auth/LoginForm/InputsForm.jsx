import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { loginSchema } from "../../../Validation/LoginSchema";
import { UseLogin } from "../../../Hooks/UseLogin";
import AuthButton from './../Buttons/AuthButton';
import PasswordField from "../PasswordField";
import EmailField from "../EmailField";


// Login Form
export default function InputsForm() {
  const { mutate } = UseLogin();

  return (
    <div className="w-full">
      <Formik initialValues={{ email: "", password: "", checked: false }}
        validationSchema={loginSchema}
        onSubmit={(values) => { mutate(values) }}>
        <Form>
          <EmailField
            name="email"
            id="loginEmail"
            label="Email"
            placeholder="example@gmail.com" />

          <PasswordField
            name="password"
            id="loginPassword"
            label="Password"
            placeholder="Enter password" />

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
