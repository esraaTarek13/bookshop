import { Field, Form, Formik, ErrorMessage } from "formik";
import AuthButton from "../Buttons/AuthButton";
import { UseForgetPassword } from "../../../Hooks/UseForgetPassword";
import { ForgetPasswordSchema } from "../../../Validation/ForgetPasswordSchema";

export default function ForgetPasswordForm() {
    const { mutate } = UseForgetPassword()


    return (
        <div className="h-screen bg-(--main-color) pt-15 ">
            <div className="w-full px-3.75 mx-auto sm:w-[80%] md:w-[70%] lg:w-[50%]">
                <div className="text-center pb-10">
                    <h2 className="font-(--text-font-weight) text-(--btn-color)">Welcome Back!</h2>
                    <p className="text-(--main-text-color-light) text-sm pt-4">Enter your email to reset your password</p>
                </div>
                <Formik initialValues={{ email: "" }} validationSchema={ForgetPasswordSchema} onSubmit={(values) => mutate(values)}>
                    <Form>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="forgetEmail" className="cursor-pointer font-(--text-font-weight) text-(--main-text-color) md:text-lg">Email</label>
                            <Field name="email" type="text" id="forgetEmail" placeholder="example@gmail.com"
                                className="border border-[#22222233] rounded-(--btn-radius) p-4 outline-0 bg-(--secondary-text-color) text-sm md:text-base" />
                            <ErrorMessage name="email" component="p" className="text-(--btn-color) text-sm mt-1" />
                        </div>

                        <AuthButton />
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
