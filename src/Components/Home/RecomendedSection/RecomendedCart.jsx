import { UseHome } from "../../../Hooks/UseHome"
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import ShopingButtons from "../../Ui/ShopingButtons";


export default function RecomendedCart() {

    const { data } = UseHome()
    const renderStars = (rate = 0) => {
        const fullStars = Math.round(rate);
        return Array.from({ length: 5 }, (i) =>
            i < fullStars ? <FaStar key={i} /> : <CiStar key={i} />
        );
    };


    return (
        <>
            {data?.map((item) => (
                <div key={item.bookId} className="flex flex-col md:flex-row gap-7.5  items-center p-8 lg:p-10 bg-white">
                    <div className=" max-w-44">
                        <img src="/images/book1.png" alt="Book Image" className="w-full h-full object-cover" />
                    </div>

                    <div>
                        <div>
                            <h4 className="font-(--header-font-weight) text-base md:text-lg">{item.bookName}</h4>
                            <p className="pt-1 text-sm text-(--main-text-color-light)">Author: <span className="text-(--main-text-color)">{item.author}</span></p>
                            <p className="pt-2 text-sm text-(--main-text-color-light)">{item.description}</p>
                        </div>

                        <div className="flex gap-2 items-center pt-6">
                            <div className="flex gap-1 items-center text-(--second-text-yellow-color)">
                                {renderStars(item.rate || 0)}
                            </div>
                            <div className="text-(--main-text-color-light) font-(--text-font-weight) text-[12px]">({item.countReview || 0} Review)</div>
                        </div>

                        <div className=" flex justify-between items-center">
                            <div className="pt-2 text-sm text-(--main-text-color-light)">Rate: <span className="font-(--text-font-weight) text-(--main-text-color)">{item.rate || "0"}</span></div>
                            <div className="text-xl lg:text-[26px] font-(--text-font-weight) text-(--main-text-color)">${item.price}</div>
                        </div>
                        <ShopingButtons />
                    </div>
                </div>
            ))
            }
        </>
    )
}
