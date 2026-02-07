import { renderStars } from './../../../../Utils/RenderStars';

// Rating
export default function BookRating({book}) {
    return (
        <div className="flex gap-2 items-center pt-6">
            <div className="flex gap-1 items-center text-(--second-text-yellow-color)">
                {renderStars(book.rate || 0)}
            </div>
            <div className="text-(--main-text-color-light) font-(--text-font-weight) text-[12px]">
                ({book.countReview || 0} Review{book.countReview !== 1 ? "s" : ""})
            </div>
        </div>
    )
}
