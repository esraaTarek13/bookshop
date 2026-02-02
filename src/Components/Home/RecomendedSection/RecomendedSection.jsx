import { UseHome } from "../../../Hooks/UseHome"
import RecomendedCart from "./RecomendedCart";


export default function RecomendedSection() {
    const { isLoading, isError, error } = UseHome()

    return (
        isLoading ? (<p>Loading...</p>) :
            isError ? (
                <p className="text-(--btn-color) text-center">
                    {error?.message || "Something went wrong"}
                </p>
            ) :
                < section className="bg-(--main-color) py-30" >
                    <div className="Custom-container">
                        <h3 className="pb-10 text-xl md:text-[26] font-(--header-font-weight) text-(--main-text-color)">Recomended For You</h3>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-6">
                            <RecomendedCart />
                        </div>
                    </div>
                </section >
    )
}
