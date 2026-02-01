import { useLocation } from "react-router-dom"
import InputSearch from "../Ui/InputSearch";
import AboutHeroContent from "./ِAboutHeroContent";

export default function HeroSection() {
    const location = useLocation();

    return (
        <section className="h-[90vh] relative">
            <img src="/images/hero.png" alt="Hero Image" className="w-full h-full object-cover scale-x-[-1]" />
            <div className={`${location.pathname === "/" ? "bg-(--gradient-color)" : "bg-[#000000CC]"} absolute inset-0  flex items-center justify-center`}>
                {location.pathname === "/" ? <InputSearch /> : <AboutHeroContent />}
            </div>
        </section>
    )
}
