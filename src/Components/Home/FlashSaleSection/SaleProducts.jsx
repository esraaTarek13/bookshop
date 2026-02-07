import { UseHome } from '../../../Hooks/UseHome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SaleProductCard from './SaleProductCard';
import Loader from '../../Ui/Loader';


// Displays flash sale products in a slider and handles loading/error states
export default function SaleProducts() {
  const { data, isLoading, isError, error } = UseHome();

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (isError) {
    return (
      <p className="text-(--btn-color) text-lg font-(--text-font-weight) text-center">
        {error?.message || "Something went wrong"}
      </p>
    );
  }

  return (
    <div className='w-[90%]'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        centeredSlides
        navigation
        breakpoints={{
          1280: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {data?.map((card) => (
          <SwiperSlide key={card.bookId} className='max-w-75 sm:max-w-106'>
            <SaleProductCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
