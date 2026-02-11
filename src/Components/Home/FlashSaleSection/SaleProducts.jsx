import { UseHome } from '../../../Hooks/UseHome';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import SaleProductCard from './SaleProductCard';
import Loader from '../../Ui/Loader';


// Displays flash sale products in a slider and handles loading/error states
export default function SaleProducts() {
  const { data, isLoading, isError, error } = UseHome();
  // const flashSales = data?.recommended || [];

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
      <Splide
        options={{
          type: "loop",
          drag: 'free',
          focus: 'center',
          perPage: "auto",
          autoWidth: true,
          gap: '32px',
          pagination: false,
        }}
        className="flex items-center"
      >

        {data?.map((card) => (
          <SplideSlide key={card.bookId} className='max-w-75 sm:max-w-106'>
            <SaleProductCard card={card} />
          </SplideSlide>
        ))}

      </Splide>
    </div>
  );
}
