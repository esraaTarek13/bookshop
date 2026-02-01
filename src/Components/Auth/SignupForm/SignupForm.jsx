import { Link } from "react-router-dom";
import SocialButton from './../Buttons/SocialButton';
import InputsForm from './InputsForm';

// Register Section
export default function SignupForm() {
    return (
        <div className="h-[150vh] bg-(--main-color) pt-15 ">
            <div className="w-full px-3.75 mx-auto sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col items-center gap-10">

                {/* Form */}
                <InputsForm />

                <div className="flex">
                    <p>Already have an account?</p>
                    <Link to="/login" className="text-(--btn-color)">Login</Link>
                </div>

                <p className="text-(--main-text-color-light)">or</p>

                <SocialButton />
            </div>
        </div>
    )
}
