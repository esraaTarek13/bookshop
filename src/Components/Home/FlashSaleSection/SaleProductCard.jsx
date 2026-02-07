import SaleProductImage from './SaleComponents/SaleProductImage';
import SaleProductInfo from './SaleComponents/SaleProductInfo';
import SaleProductRating from './SaleComponents/SaleProductRating';
import SaleProductPrice from './SaleComponents/SaleProductPrice';
import SaleProductStock from './SaleComponents/SaleProductStock';
import SaleProductCartButton from './SaleComponents/SaleProductCartButton';

// Card component for a single sale product
export default function SaleProductCard({ card }) {
    return (
        <div className='max-w-75 sm:max-w-106 flex flex-col sm:flex-row gap-6 bg-(--secondary-color) p-4 rounded-(--btn-radius)'>

            <SaleProductImage card={card} />

            <div>
                <SaleProductInfo card={card} />
                <SaleProductRating card={card} />
                <SaleProductPrice card={card} />
                <SaleProductStock card={card} />
                <SaleProductCartButton />
            </div>
        </div>
    );
}
