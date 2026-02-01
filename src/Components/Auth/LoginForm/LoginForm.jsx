import { Link } from "react-router-dom";
import SocialButton from './../Buttons/SocialButton';
import InputsForm from './InputsForm';


// Login Section
export default function LoginForm() {
    return (

        <div className="h-[150vh] bg-(--main-color) pt-15 ">
            <div className="w-full px-3.75 mx-auto sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col items-center gap-10">
                <h2 className="font-(--text-font-weight) text-(--btn-color)">Welcome Back!</h2>

                {/* Form */}
                <InputsForm />

                <div className="flex">
                    <p>Don’t have an account?</p>
                    <Link to="/signup" className="text-(--btn-color)">Signup</Link>
                </div>

                <p className="text-(--main-text-color-light)">or</p>

               <SocialButton />
            </div>
        </div>
    )
}
