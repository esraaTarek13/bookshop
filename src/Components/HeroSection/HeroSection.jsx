
export default function HeroSection() {
    return (
        <div className="h-[90vh] relative">
            <img src="/images/hero.png" alt="Hero Image" className="w-full h-full object-cover scale-x-[-1]" />
            <div className="absolute inset-0 bg-[#00000099] "></div>
        </div>
    )
}
