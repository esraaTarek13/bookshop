import BookInfo from "./BookComponents/BookInfo";
import BookPrice from "./BookComponents/BookPrice";
import BookRating from "./BookComponents/BookRating";
import ShopingButtons from './../../Ui/ShopingButtons';


// Displays a single recommended book with its image and details
export default function RecomendedItem({ book }) {
    return (
        <div className="flex flex-col md:flex-row gap-5 md:gap-7.5 items-center p-6 xl:p-10 bg-white overflow-hidden">
            <div className="max-w-30 sm:max-w-36 md:max-w-44 ">
                <img src= {book.image || "/images/book1.png"}
                 alt={book.bookName || "Book Image"}
                 className="w-full h-full object-cover" />
            </div>

            <div>
                <BookInfo book={book}/>

                {/* Rating stars */}
                <BookRating book={book}/>

                {/* Price and rate */}
                <BookPrice book={book}/>

                {/* Shopping buttons */}
                <ShopingButtons />
            </div>
        </div>
    )
}
