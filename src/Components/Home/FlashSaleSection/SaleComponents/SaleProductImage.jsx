
// Product image
export default function SaleProductImage({card}) {
    return (
        <div className='flex justify-center'>
            <div className='w-27 sm:w-44'>
                <img src={card.image || "/images/book1.png"} 
                alt={card.bookName || "Book Image"} 
                className='w-full h-full object-cover' />
            </div>
        </div>
    )
}
