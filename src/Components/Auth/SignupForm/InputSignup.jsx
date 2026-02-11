import { Field, Form, Formik } from "formik";
import { registerSchema } from "../../../Validation/RegisterSchema";
import { UseRegister } from "../../../Hooks/UseRegister";
import AuthButton from '../Buttons/AuthButton';
import MainField from "../../Ui/MainField";

// Register Form
export default function InputSignup() {
    const { mutate } = UseRegister();

    return (
        <div className="w-full">
            <Formik
                initialValues={{ first_name: "", last_name: "", email: "", password: "", password_confirmation: "", agree: false }}
                validationSchema={registerSchema} onSubmit={(values) => { mutate(values) }}>

                <Form>
                    <div className="w-full md:flex gap-4">
                        <div className="flex flex-col gap-2 md:w-[50%]">
                            <MainField
                                name="first_name"
                                type="text"
                                id="firstName"
                                label="First Name"
                                placeholder="John"
                                fn={false}
                            />
                        </div>

                        <div className="flex flex-col gap-2 md:w-[50%]">
                            <MainField
                                name="last_name"
                                type="text"
                                id="lastName"
                                label="Last Name"
                                placeholder="Smith"
                                fn={false}
                            />
                        </div>
                    </div>

                    <MainField
                        name="email"
                        type="text"
                        id="signupEmail"
                        label="Email"
                        placeholder="example@gmail.com"
                        fn={false}
                    />

                    <MainField
                        name="password"
                        type="password"
                        id="signupPassword"
                        label="Password"
                        placeholder="Enter password"
                        fn={true}
                    />

                    <MainField
                        name="password_confirmation"
                        type="password"
                        id="confirmationPassword"
                        label="Confirm password"
                        placeholder="Enter password"
                        fn={true}
                    />

                    <div className="flex gap-2 pt-4">
                        <Field name="agree" type="checkbox" id="agree" />
                        <label htmlFor="agree">Agree with<span className="text-(--btn-color)"> Terms & Conditions</span></label>
                    </div>

                    {/* Signup Button */}
                    <AuthButton content={"Sign Up"} />
                </Form>
            </Formik>
        </div>
    )
}







