import { IoSearch } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { Field, Form, Formik } from "formik";
import { SearchSchema } from "../../Validation/SearchSchema";


// Formik form to handle search input with validation
export default function InputSearch() {
    return (
        <Formik initialValues={{ search: "" }} validationSchema={SearchSchema} onSubmit={(values) => console.log(values)}>
            <Form autoComplete="off" className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-12.5 bg-(--secondary-text-color) rounded-full flex items-center justify-between">
                <Field name="search" type="text" placeholder="Search" className=" outline-0 pl-6 w-full" />
                <IoMicOutline className="text-2xl text-(--main-text-color-light) cursor-pointer" />

                <button type="submit" className="bg-(--btn-color) text-(--secondary-text-color) rounded-br-full rounded-tr-full text-2xl h-full px-6 flex justify-center items-center cursor-pointer ml-2">
                    <IoSearch />
                </button>
            </Form>
        </Formik>
    )
}
