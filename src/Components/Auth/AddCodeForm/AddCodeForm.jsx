import InputAddCode from "./InputAddCode";

export default function AddCodeForm() {
  return (
    <div className="h-screen bg-(--main-color) pt-15 ">
      <div className="w-full px-3.75 mx-auto sm:w-[60%] md:w-[50%] lg:w-[30%]">
        <div className="text-center pb-10">
          <h2 className="font-(--text-font-weight) text-(--btn-color)">Reset your password!</h2>
          <p className="text-(--main-text-color-light) text-sm pt-4">Enter the 4 dights code that you received on your email</p>
        </div>

        <InputAddCode />

        <div className="flex justify-center pt-10 gap-0.5">
          <p>Didn’t receive a code?</p>
          <p className="text-(--btn-color) font-(--text-font-weight)">Send again</p>
        </div>
      </div>
    </div>
  )
}
