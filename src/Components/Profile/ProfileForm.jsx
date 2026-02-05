import { Field, Form, Formik } from "formik"

export default function ProfileForm({ profileData }) {
  return (
    <Formik
      initialValues={profileData}
      enableReinitialize={true}
      onSubmit={(values) => console.log(values)}
    >

      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} autoComplete="off"
          className="w-full flex flex-col justify-center items-center">

          <div className="w-45 h-45 absolute top-[30%]">
            <img
              src={profileData.image || "/images/Profile.jpg"}
              alt="Profile"
              className="w-full h-full object-cover rounded-full" />
          </div>

          <div className="w-full bg-(--secondary-text-color) p-10 border border-[#22222233] rounded-(--section-radius) mt-50">
            <h3 className="text-(--main-text-color) font-(--text-font-weight) text-lg lg:text-xl pb-10 text-center">
              General information
            </h3>


            <div className="w-full md:flex gap-4">
              <div className="flex flex-col gap-2 md:w-[50%]">
                <label htmlFor="first-Name" className="cursor-pointer text-(--main-text-color-light) md:text-sm">First Name</label>
                <Field name="first_name" type="text" id="first-Name"
                  className="text-sm md:text-base bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 outline-0 " />
              </div>

              <div className="flex flex-col gap-2 md:w-[50%] mt-6 md:mt-0">
                <label htmlFor="last-Name" className="cursor-pointer text-(--main-text-color-light) md:text-sm">Last Name</label>
                <Field name="last_name" type="text" id="last-Name"
                  className="text-sm md:text-base bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 outline-0" />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <label htmlFor="email-input" className="cursor-pointer text-(--main-text-color-light) md:text-sm">Email</label>
              <Field name="email" type="text" id="email-input"
                className="text-sm md:text-base bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 outline-0" />
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <label htmlFor="phone" className="cursor-pointer text-(--main-text-color-light) md:text-sm">Phone number</label>
              <Field name="phone" type="text" id="phone"
                className="text-sm md:text-base bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 outline-0" />
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <label htmlFor="address" className="cursor-pointer text-(--main-text-color-light) md:text-sm">Address</label>
              <Field name="address" type="text" id="address"
                className="text-sm md:text-base bg-(--secondary-text-color) border border-[#22222233] rounded-(--btn-radius) p-4 outline-0" />
            </div>
          </div>

        </Form>
      )}
    </Formik>
  )
}


