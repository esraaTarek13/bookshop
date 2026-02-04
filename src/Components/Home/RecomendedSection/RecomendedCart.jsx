import { UseHome } from "../../../Hooks/UseHome"
import { renderStars } from "../../../Utils/RenderStars";
import ShopingButtons from "../../Ui/ShopingButtons";


export default function RecomendedCart() {
    const { data, isLoading, isError, error } = UseHome()

    return (
        <>
            {isLoading && (
                <div className="w-5 h-5 rounded-full animate-spin border-2 border-l-transparent border-(--secondary-color)"></div>
            )}

            {isError && (
                <p className="text-(--btn-color) text-lg font-(--text-font-weight) text-center">
                    {error?.message || "Something went wrong"}
                </p>
            )}
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-6 self-start">
                {!isLoading && !isError && data?.map((item) => (
                    <div key={item.bookId} className="flex flex-col md:flex-row gap-5 md:gap-7.5 items-center p-6 xl:p-10 bg-white overflow-hidden">
                        <div className="max-w-30 sm:max-w-36 md:max-w-44 ">
                            <img src="/images/book1.png" alt="Book Image" className="w-full h-full object-cover" />
                        </div>

                        {/* Product details */}
                        <div>
                            <div>
                                <h4 className="font-(--header-font-weight) text-base md:text-lg">{item.bookName}</h4>
                                <p className="pt-1 text-sm text-(--main-text-color-light)">Author: <span className="text-(--main-text-color)">{item.author}</span></p>
                                <p className="pt-2 text-sm text-(--main-text-color-light)">{item.description}</p>
                            </div>

                            {/* Rating stars */}
                            <div className="flex gap-2 items-center pt-6">
                                <div className="flex gap-1 items-center text-(--second-text-yellow-color)">
                                    {renderStars(item.rate || 0)}
                                </div>
                                <div className="text-(--main-text-color-light) font-(--text-font-weight) text-[12px]">({item.countReview || 0} Review)</div>
                            </div>

                            {/* Price and rate */}
                            <div className=" flex justify-between items-center">
                                <div className="pt-2 text-sm text-(--main-text-color-light)">Rate: <span className="font-(--text-font-weight) text-(--main-text-color)">{item.rate || "0"}</span></div>
                                <div className="text-xl lg:text-[26px] font-(--text-font-weight) text-(--main-text-color)">${item.price}</div>
                            </div>
                            
                            {/* Shopping buttons */}
                            <ShopingButtons />
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}
