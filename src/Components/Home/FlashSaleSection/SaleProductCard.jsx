import { renderStars } from '../../../Utils/RenderStars';
import { IoCartOutline } from "react-icons/io5";

export default function SaleProductCard({ card }) {
    const totalStock = 100;
    const percentage = (card.stock / totalStock) * 100;
    return (
        <div className='max-w-75 sm:max-w-106 flex flex-col sm:flex-row gap-6 bg-(--secondary-color) p-4 rounded-(--btn-radius)'>

            <div className='flex justify-center'>
                <div className='w-27 sm:w-44'>
                    <img src="/images/book1.png" alt={card.bookName} className='w-full h-full object-cover' />
                </div>
            </div>

            <div>
                <div className='mb-4'>
                    <h4 className='text-sm md:text-base font-(--header-font-weight) text-(--secondary-text-color) truncate max-w-47'>
                        {card.bookName}
                    </h4>
                    <p className='text-[12px] text-[#FFFFFF80]'>
                        Author: <span className='text-(--secondary-text-color)'>{card.author}</span>
                    </p>
                </div>

                {/* Rating */}
                <div className='flex items-center gap-2'>
                    <div className="flex gap-1 items-center text-(--second-text-yellow-color)">
                        {renderStars(card.rate || 0)}
                    </div>
                    <div className='text-[12px] text-[#FFFFFF80]'>
                        ({card.countReview || 0} Review)
                    </div>
                </div>

                <p className='text-[12px] text-[#FFFFFF80] pt-1'>
                    Rate: <span className='font-(--text-font-weight) text-(--secondary-text-color)'>{card.rate || 0}</span>
                </p>

                {/* Price */}
                <div className='flex items-center gap-2 pt-4'>
                    <p className='text-[12px] md:text-sm text-[#FFFFFF80]'>
                        $ {card.price}
                    </p>
                    <p className='text-lg md:text-[22px] text-(--secondary-text-color)'>
                        $ {card.final_price}
                    </p>
                </div>

                <div className='pt-4'>
                    <div className='w-full h-2 bg-[#FFFFFF1A] rounded-(--section-radius)'>
                        <div className='h-2 bg-(--first-text-yellow-color) rounded-(--section-radius)'
                            style={{ width: `${percentage}%` }}></div>
                    </div>
                    <p className='text-[12px] text-[#FFFFFF80] pt-2.25'>
                        {card.stock} books left
                    </p>
                </div>

                <div className='pt-6 flex justify-end'>
                    <div className='w-12 h-12 bg-(--btn-color) rounded-(--btn-radius) flex justify-center items-center'>
                        <IoCartOutline className='text-2xl text-(--secondary-text-color)' />
                    </div>
                </div>
            </div>
        </div>
    );
}
