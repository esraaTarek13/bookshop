import { useProfile } from "../../Hooks/UseProfile"
import Loader from "../Ui/Loader"
import ProfileForm from "./ProfileForm"

export default function ProfileInfo() {
    const { data, isLoading, isError, error } = useProfile()

    const profileData = {
        first_name: data?.data?.first_name || "",
        last_name: data?.data?.last_name || "",
        email: data?.data?.email || "",
        image: data?.data?.image || "",
        phone: data?.data?.phone || "",
        address: data?.data?.address || "",
    }

    return (
        <section className="bg-(--main-color) min-h-screen flex justify-center items-center">
            {isLoading && <Loader />}

            {isError && <div>{error?.message || "An unexpected error occurred"}</div>}

            {!isLoading && !isError &&
                <div className="self-start w-full px-3.75 sm:w-[80%] md:w-[70%] lg:w-[50%] mb-20">
                    <ProfileForm profileData={profileData} />
                </div>
            }
        </section>

    )
}
