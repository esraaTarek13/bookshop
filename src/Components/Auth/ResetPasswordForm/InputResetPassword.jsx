import { Field, Form, Formik } from "formik";
import { ResetPasswordSchema } from "../../../Validation/ResetPasswordSchema";
import AuthButton from "../Buttons/AuthButton";
import MainField from "../../Ui/MainField";

export default function InputResetPassword() {

    return (
        <Formik
            initialValues={{ password: "", password_confirmation: "", checked: false }}
            validationSchema={ResetPasswordSchema}
            onSubmit={(values) => console.log(values)}>
            <Form>
                <MainField
                    name="password"
                    type="password"
                    id="resetPassword"
                    label="Password"
                    placeholder="Enter password"
                    fn={true}
                />

                <MainField
                    name="password_confirmation"
                    type="password"
                    id="reset-ConfirmPassword"
                    label="Confirm password"
                    placeholder="Enter password"
                    fn={true}
                />

                <div className="flex gap-2 pt-4">
                    <Field name="checked" type="checkbox" id="checkedRememberMe" />
                    <label htmlFor="checkedRememberMe">Remember me</label>
                </div>

                <AuthButton content={"Reset password"} />
            </Form>
        </Formik>
    )
}
