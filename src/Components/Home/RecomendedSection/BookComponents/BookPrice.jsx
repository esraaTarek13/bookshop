
// Price
export default function BookPrice({ book }) {
    return (
        <div className=" flex justify-between items-center">
            <div className="pt-2 text-sm text-(--main-text-color-light)">
                Rate:
                <span className="font-(--text-font-weight) text-(--main-text-color)">{book.rate || "0"}</span>
            </div>
            <div className="text-xl lg:text-[26px] font-(--text-font-weight) text-(--main-text-color)">
                ${book.price}
            </div>
        </div>
    )
}
