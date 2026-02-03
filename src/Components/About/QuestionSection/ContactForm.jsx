import { Field, Form, Formik, ErrorMessage } from "formik";
import { ContactSchema } from "../../../Validation/ContactSchema";
import { UseContact } from "../../../Hooks/UseContact";
import { BiUser } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";


export default function ContactForm() {
    const { mutate } = UseContact()
    return (
        <Formik initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={(values) => { mutate(values) }}>
            <Form className="flex flex-col items-center w-full" autoComplete="off">
                <div className="w-full md:flex gap-4">
                    <div className="md:w-[50%]">
                        <div className="flex items-center gap-3.5 bg-transparent border border-[#FFFFFF33] text-[#FFFFFF33] rounded-(--btn-radius) p-4 overflow-hidden">
                            <BiUser />
                            <Field name="name" type="text" id="name" placeholder="Name"
                                className="w-full text-sm md:text-base text-[#FFFFFF] outline-0" />
                        </div>
                        <ErrorMessage name="name" component="p" className="text-(--btn-color) text-sm mt-1" />
                    </div>

                    <div className="md:w-[50%] mt-6 md:mt-0">
                        <div className="flex items-center gap-3.5 bg-transparent border border-[#FFFFFF33] text-[#FFFFFF33] rounded-(--btn-radius) p-4 overflow-hidden">
                            <FaRegEnvelope />
                            <Field name="email" type="text" id="email" placeholder="Email Address"
                                className="w-full text-sm md:text-base text-[#FFFFFF] outline-0 " />
                        </div>
                        <ErrorMessage name="email" component="p" className="text-(--btn-color) text-sm mt-1" />
                    </div>
                </div>

                <div className=" mt-6 w-full">
                    <div className="flex gap-3.5 bg-transparent border border-[#FFFFFF33] text-[#FFFFFF33] rounded-(--btn-radius) p-4 overflow-hidden">
                        <GoPencil className="pt-1 text-xl"/>
                        <Field name="message" as="textarea" id="textarea" placeholder="Your Message"
                            className="text-sm md:text-base text-[#FFFFFF] outline-0 w-full h-38" />
                    </div>
                    <ErrorMessage name="message" component="p" className="text-(--btn-color) text-sm mt-1" />
                </div>

                <button className="text-(--secondary-text-color) mt-10 py-3 px-9.5 rounded-(--btn-radius) outline-0 text-base lg:text-lg bg-(--btn-color) border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500 cursor-pointer">Send Message</button>
            </Form>
        </Formik>
    )
}
