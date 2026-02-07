import { Field, Form, Formik } from "formik";
import { registerSchema } from "../../../Validation/RegisterSchema";
import { UseRegister } from "../../../Hooks/UseRegister";
import AuthButton from './../Buttons/AuthButton';
import EmailField from "../EmailField";
import PasswordField from "../PasswordField";
import TextField from "../TextField";

// Register Form
export default function InputsForm() {
    const { mutate } = UseRegister();

    return (
        <div className="w-full">
            <Formik initialValues={{ first_name: "", last_name: "", email: "", password: "", password_confirmation: "", agree: false }}
                validationSchema={registerSchema} onSubmit={(values) => { mutate(values) }}>
                <Form>
                    <div className="w-full md:flex gap-4 mb-6">
                        <div className="flex flex-col gap-2 md:w-[50%]">
                            <TextField
                                name="first_name"
                                id="firstName"
                                label="First Name"
                                placeholder="John" />
                        </div>

                        <div className="flex flex-col gap-2 md:w-[50%] mt-6 md:mt-0">
                            <TextField
                                name="last_name"
                                id="lastName"
                                label="Last Name"
                                placeholder="Smith" />
                        </div>
                    </div>

                    <EmailField
                        name="email"
                        id="signupEmail"
                        label="Email"
                        placeholder="example@gmail.com" />


                    <PasswordField
                        name="password"
                        id="signupPassword"
                        label="Password"
                        placeholder="Enter password" />

                    <PasswordField
                        name="password_confirmation"
                        id="confirmationPassword"
                        label="Confirm password"
                        placeholder="Enter password" />

                    <div className="flex gap-2 pt-4">
                        <Field name="agree" type="checkbox" id="agree" />
                        <label htmlFor="agree">Agree with<span className="text-(--btn-color)"> Terms & Conditions</span></label>
                    </div>

                    {/* Signup Button */}
                    <AuthButton />
                </Form>
            </Formik>
        </div>
    )
}







