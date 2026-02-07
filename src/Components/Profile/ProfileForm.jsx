import { ErrorMessage, Form, Formik } from "formik"
import { useUpdateProfile } from "../../Hooks/UseProfile"
import ProfileImage from "./ProfileImage";
import ProfileField from "./ProfileField";
import Loader from "../Ui/Loader";
import { ProfileSchema } from "../../Validation/ProfileSchema";

export default function ProfileForm({ profileData }) {
  const { mutate, isLoading } = useUpdateProfile()

  // Handle form submit (send only required fields)
  const onSubmit = (values) => {
    const { phone, address } = values;
    mutate({ phone, address });
  }

  return (
    <Formik
      initialValues={profileData}
      enableReinitialize={true}
      validationSchema={ProfileSchema}
      onSubmit={onSubmit}
    >

      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} autoComplete="off"
          className="w-full flex flex-col justify-center items-center">

          <ProfileImage image={profileData?.image} />

          <div className="w-full bg-(--secondary-text-color) p-10 border border-[#22222233] rounded-(--section-radius) mt-50">
            <h3 className="text-(--main-text-color) font-(--text-font-weight) text-lg lg:text-xl pb-10 text-center">
              General information
            </h3>


            <div className="w-full md:flex gap-4">
              <div className="flex flex-col gap-2 md:w-[50%]">
                <ProfileField name="first_name" id="first_name" label="First Name" />
              </div>

              <div className="flex flex-col gap-2 md:w-[50%] mt-6 md:mt-0">
                <ProfileField name="last_name" id="last_name" label="Last Name" />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <ProfileField name="email" id="email-input" label="Email" />
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <ProfileField name="phone" id="phone" label="Phone number" />
              <ErrorMessage name="phone" component="p" className="text-(--btn-color) text-sm mt-1" />
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <ProfileField name="address" id="address" label="Address" />
              <ErrorMessage name="address" component="p" className="text-(--btn-color) text-sm mt-1" />
            </div>
          </div>

          {/* Submit button with loading state */}
          <button type="submit"
            disabled={isLoading}
            className="mt-10 bg-(--btn-color) py-2 px-11 md:py-3 md:px-13.25 rounded-(--btn-radius) font-(--text-font-weight) text-[16px] md:text-[18px] text-(--secondary-text-color) cursor-pointer border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500">
            {isLoading ? <Loader /> : "Update information"}
          </button>
        </Form>
      )}
    </Formik>
  )
}


