
import { images } from '../../../Constants/SliderImages';

export default function Marquee() {

    return (
        <div className="flex items-center gap-8">
            {images.map((image) => (
                <div key={image.id} className="max-h-65 max-w-43.25">
                    <div className="w-43.25 h-65 overflow-hidden rounded-(--btn-radius)">
                        <img
                            src={image.src}
                            alt="Book Image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
