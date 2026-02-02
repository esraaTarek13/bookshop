import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from './../../../Constants/SliderImages';
import { Autoplay } from "swiper/modules";


export default function Slider() {
  return (
    <Swiper
    modules={[Autoplay]}
    loop={true}
    spaceBetween={32}
    slidesPerView={4}
    autoplay={{ delay: 2000 }}
      >
      {images.map((image) => (
        <SwiperSlide key={image.id} className='max-h-65 max-w-43.25'>
          <div className="w-43.25 h-65 overflow-hidden rounded-(--btn-radius)">
            <img src={image.src} alt="Book Image" className=" h-full w-full object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  )
}




