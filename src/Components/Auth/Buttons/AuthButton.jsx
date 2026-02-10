
export default function AuthButton({content}) {

    return (
        <>
            <button type="submit" className="w-full mt-8.75 cursor-pointer p-2 md:p-4 rounded-(--btn-radius) bg-(--btn-color) text-(--secondary-text-color) font-(--text-font-weight) md:text-lg border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500">
                {content}
            </button>
        </>
    )
}
