import { UseHome } from "../../../Hooks/UseHome"
import Loader from "../../Ui/Loader";
import RecomendedItem from "./RecomendedItem";

// Handles loading and error states and displays recommended books
export default function RecomendedCart() {
    const { data, isLoading, isError, error } = UseHome()

    return (
        <>
            {isLoading && (
                <Loader />
            )}

            {isError && (
                <p className="text-(--btn-color) text-lg font-(--text-font-weight) text-center">
                    {error?.message || "Something went wrong"}
                </p>
            )}
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-6 self-start">
                {!isLoading && !isError && data?.map((item) => (
                   <RecomendedItem key={item.bookId} book={item}/>
                ))
                }
            </div>
        </>
    )
}
