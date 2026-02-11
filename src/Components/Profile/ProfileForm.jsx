import { Form, Formik } from "formik"
import { useUpdateProfile } from "../../Hooks/UseProfile"
import ProfileImage from "./ProfileImage";
import { ProfileSchema } from "../../Validation/ProfileSchema";
import { useState } from "react";
import ProfileField from "./ProfileField";
import toast from "react-hot-toast";

export default function ProfileForm({ profileData }) {
  const [isEditing, setIsEditing] = useState(false)
  const { mutate } = useUpdateProfile()

  // Handle form submit (send fields)
  const onSubmit = (values) => {
    const isChanged = Object.keys(values).some(
      (key) => values[key] !== profileData[key]
    );

    if (!isChanged) {
      toast.error("No changes detected"); 
      return; 
    }
    
    const { first_name, last_name, email, phone, address } = values;
    mutate({ first_name, last_name, email, phone, address });
    setIsEditing(false);
  }

  return (
    <>
      <Formik
        initialValues={profileData}
        enableReinitialize={true}
        validationSchema={ProfileSchema}
        onSubmit={onSubmit}
      >
        <Form autoComplete="off"
          className="w-full flex flex-col justify-center items-center">

          <ProfileImage image={profileData?.image} />

          <div className="w-full bg-(--secondary-text-color) p-10 border border-[#22222233] rounded-(--section-radius) mt-50">
            <h3 className="text-(--main-text-color) font-(--text-font-weight) text-lg lg:text-xl pb-10 text-center">
              General information
            </h3>

            <ProfileField isEditing={isEditing} />
          </div>

          {/* Submit button with loading state */}
          {isEditing && (
            <button
              type="submit"
              className="mt-10 bg-(--btn-color) py-2 px-11 md:py-3 md:px-13.25 rounded-(--btn-radius) font-(--text-font-weight) text-[16px] md:text-[18px] text-(--secondary-text-color) cursor-pointer border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500"
            >
              Update information
            </button>
          )}

        </Form>
      </Formik>

      {!isEditing && (
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="mt-10 bg-(--btn-color) py-2 px-11 md:py-3 md:px-13.25 rounded-(--btn-radius) font-(--text-font-weight) text-[16px] md:text-[18px] text-(--secondary-text-color) cursor-pointer border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500"
          >
            Update information
          </button>
        </div>
      )}
    </>
  )
}


