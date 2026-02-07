import { Field, Form, Formik } from "formik";
import { ResetPasswordSchema } from "../../../Validation/ResetPasswordSchema";
import AuthButton from "../Buttons/AuthButton";
import PasswordField from "../PasswordField";

export default function InputResetPassword() {

    return (
        <Formik initialValues={{ password: "", password_confirmation: "", checked: false }}
            validationSchema={ResetPasswordSchema}
            onSubmit={(values) => console.log(values)}>
            <Form>
                <PasswordField
                    name="password"
                    id={"resetPassword"}
                    label="Password"
                    placeholder="Enter password" />
                    
                <PasswordField
                    name="password_confirmation"
                    id={"reset-ConfirmPassword"}
                    label="Confirm password"
                    placeholder="Enter password" />

                <div className="flex gap-2 pt-4">
                    <Field name="checked" type="checkbox" id="checkedRememberMe" />
                    <label htmlFor="checkedRememberMe">Remember me</label>
                </div>

                <AuthButton />
            </Form>
        </Formik>
    )
}
