import { useLocation } from "react-router-dom"
import InputSearch from "../Ui/InputSearch";
import AboutHeroContent from "./ِAboutHeroContent";

export default function HeroSection({ height }) {
    const location = useLocation();

    return (
        <section className={`relative ${height}`}>
            <img src="/images/hero.png" alt="Hero Image" className="w-full h-full object-cover scale-x-[-1]" />
            <div className={`${location.pathname === "/about" ? "bg-[#000000CC]" : "bg-(--gradient-color)"} absolute inset-0  flex items-center justify-center`}>
                {location.pathname === "/" ? <InputSearch /> : location.pathname === "/about" ? <AboutHeroContent /> : null}
            </div>
        </section>
    )
}
