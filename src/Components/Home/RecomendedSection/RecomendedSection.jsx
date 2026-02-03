import RecomendedCart from "./RecomendedCart";

export default function RecomendedSection() {

    return (
        < section className="bg-(--main-color) py-30" >
            <div className="Custom-container h-full">
                <h3 className="pb-10 text-xl md:text-[26] font-(--header-font-weight) text-(--main-text-color)">Recomended For You</h3>
                <div className="flex justify-center items-center min-h-[60vh]">
                    <RecomendedCart />
                </div>
            </div>
        </section >
    )
}
