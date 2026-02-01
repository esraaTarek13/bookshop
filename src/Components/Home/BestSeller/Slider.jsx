import { images } from "../../../Constants/SliderImages";

export default function Slider() {
  return (
    <div className="flex gap-8">
      {images.map((image) => (
        <div key={image.id} className="h-65 w-43.25 overflow-hidden rounded-(--btn-radius)">
          <img src={image.src} alt="Book Image" className=" h-full w-full object-cover" />
        </div>
      ))}
    </div>

  )
}
