import InputResetPassword from "./InputResetPassword";

export default function ResetPasswordForm() {
    return (
        <div className="h-screen bg-(--main-color) pt-15 ">
            <div className="w-full px-3.75 mx-auto sm:w-[80%] md:w-[70%] lg:w-[50%]">
                <div className="text-center pb-10">
                    <h2 className="font-(--text-font-weight) text-(--btn-color)">Create new password!</h2>
                    <p className="text-(--main-text-color-light) text-sm pt-4">
                        Create a strong password <br /> Your new password must be different from previous one
                    </p>
                </div>

                <InputResetPassword />
            </div>
        </div>
    )
}
