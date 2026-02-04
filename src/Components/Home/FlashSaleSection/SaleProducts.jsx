import { UseHome } from '../../../Hooks/UseHome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { renderStars } from '../../../Utils/RenderStars';
import { IoCartOutline } from "react-icons/io5";

export default function SaleProducts() {
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

      {!isLoading && !isError &&
        <div className='w-[90%]'>

          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={2.5}
            centeredSlides={true}
            navigation
            breakpoints={{
              1280: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {data?.map((card) => (
              <SwiperSlide key={card.bookId} className='w-50'>
                <div className='max-w-75 sm:max-w-106 flex flex-col sm:flex-row gap-6 bg-(--secondary-color) p-4 rounded-(--btn-radius)'>
                  <div className='flex justify-center'>
                    <div className='w-27 sm:w-44 '>
                      <img src="/images/book1.png" alt="Book Image" className='w-full h-full object-cover' />
                    </div>
                  </div>

                  {/* Product details */}
                  <div>
                    <div className='mb-4'>
                      <h4 className='text-sm md:text-base font-(--header-font-weight) text-(--secondary-text-color) truncate max-w-47'>{card.bookName}</h4>
                      <p className='text-[12px] text-[#FFFFFF80]'>Author: <span className='text-(--secondary-text-color)'>{card.author}</span></p>
                    </div>

                    {/* Rating stars */}
                    <div className='flex items-center gap-2'>
                      <div className="flex gap-1 items-center text-(--second-text-yellow-color)">
                        {renderStars(card.rate || 0)}
                      </div>

                      <div className='text-[12px] text-[#FFFFFF80]'>({card.countReview || 0} Review)</div>
                    </div>

                    {/* rate */}
                    <div className='pt-1'>
                      <p className='text-[12px] text-[#FFFFFF80]'>Rate: <span className='font-(--text-font-weight) text-(--secondary-text-color)'>{card.rate || 0}</span></p>
                    </div>

                    {/* Price */}
                    <div className='flex items-center gap-2 font-(--text-font-weight pt-4.25'>
                      <p className='text-[12px] md:text-sm text-[#FFFFFF80] )'>$ {card.price}</p>
                      <p className='text-lg md:text-[22px] text-(--secondary-text-color)'>$ {card.final_price}</p>
                    </div>

                    {/* Books left */}
                    <div className='pt-4'>
                      <p className='text-[12px] text-[#FFFFFF80] pt-2'>{card.stock} books left</p>
                    </div>

                    {/* Cart buttons */}
                    <div className='pt-6 flex justify-end'>
                      <div className='w-12 h-12 bg-(--btn-color) rounded-(--btn-radius) flex justify-center items-center'>
                        <IoCartOutline className='text-2xl text-(--secondary-text-color)' />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      }
    </>
  )
}
