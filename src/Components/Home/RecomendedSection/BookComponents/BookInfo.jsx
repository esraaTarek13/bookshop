
// Book Info
export default function BookInfo({ book }) {
    return (
        < div >
            <h4 className="font-(--header-font-weight) text-base md:text-lg">
                {book.bookName || "No title"}
            </h4>

            <p className="pt-1 text-sm text-(--main-text-color-light)">
                Author:
                <span className="text-(--main-text-color)">
                    {book.author || "Unknown"}
                </span>
            </p>

            <p className="pt-2 text-sm text-(--main-text-color-light)">
                {book.description || "No description available"}
            </p>
        </div >
    )
}
