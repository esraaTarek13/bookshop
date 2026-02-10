import { Form, Formik } from "formik";
import AuthButton from "../Buttons/AuthButton";
import { UseForgetPassword } from "../../../Hooks/UseForgetPassword";
import { ForgetPasswordSchema } from "../../../Validation/ForgetPasswordSchema";
import MainField from "../../Ui/MainField";

export default function ForgetPasswordForm() {
    const { mutate } = UseForgetPassword()


    return (
        <Formik
            initialValues={{ email: "" }}
            validationSchema={ForgetPasswordSchema}
            onSubmit={(values) => mutate(values)}>
            <Form>
                <div className="h-screen bg-(--main-color) pt-15 ">
                    <div className="w-full px-3.75 mx-auto sm:w-[80%] md:w-[70%] lg:w-[50%]">
                        <div className="text-center pb-10">
                            <h2 className="font-(--text-font-weight) text-(--btn-color)">Welcome Back!</h2>
                            <p className="text-(--main-text-color-light) text-sm pt-4">Enter your email to reset your password</p>
                        </div>

                        <MainField
                            name="email"
                            type="text"
                            id="email"
                            label="Email"
                            placeholder="example@gmail.com"
                            fn={false}
                        />

                        <AuthButton content={"Send reset code"} />
                    </div>
                </div>
            </Form>
        </Formik>
    )
}
