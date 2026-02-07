import { OtpSchema } from '../../../Validation/OtpSchema';
import AuthButton from './../Buttons/AuthButton';
import { Formik, Form, Field, ErrorMessage } from "formik";

// OTP input
export default function InputAddCode() {
    const otpBoxes = [0, 1, 2, 3]
    return (
        <div>
            <Formik
                initialValues={{ otp: "" }}
                validationSchema={OtpSchema}
                onSubmit={(values) => console.log(values)}>
                {({ values, setFieldValue }) =>
                    <Form>
                        <div className='flex items-center justify-center gap-6'>
                            {otpBoxes.map((i) => (
                                <Field key={i} type="text" maxLength="1" value={values.otp[i] || ""}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/, "");
                                        const otpArr = values.otp.split("");
                                        otpArr[i] = val;
                                        setFieldValue("otp", otpArr.join(""));
                                    }}
                                    className="w-10 h-10 md:w-15 md:h-15 rounded-xl out border border-(--main-text-color-light) text-center focus:border-(--main-text-color) text-lg md:text-[22px] font-(--text-font-weight) text-black" />
                            ))}
                        </div>
                        <ErrorMessage name="otp" component="p" className="text-(--btn-color) text-sm mt-2 text-center " />

                        <AuthButton />
                    </Form>
                }
            </Formik>
        </div>
    )
}




