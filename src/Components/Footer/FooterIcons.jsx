import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function FooterIcons() {
    const [icons, setIcons] = useState([<FaFacebook />, <FaInstagram />, <FaYoutube />, <FaXTwitter />])

    return (
        <ul className="flex gap-6 text-3xl">
            {icons.map((icon, index) => (
                <li key={index} className="cursor-pointer hover:text-(--first-text-yellow-color) transition-colors duration-300">{icon}</li>
            ))}
        </ul>
    )
}
