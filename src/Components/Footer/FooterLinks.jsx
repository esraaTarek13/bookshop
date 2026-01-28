import { Link } from "react-router-dom";
import FooterIcons from "./FooterIcons";
import { useState } from "react";


export default function FooterLinks() {
    const [links, setLinks] = useState([
        {
            path: "",
            name: "Home",
        },
        {
            path: "books",
            name: "Books",
        },
        {
            path: "about",
            name: "About Us",
        }
    ])

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between md:items-center pb-4">
                <div className="flex flex-col md:flex-row gap-10 font-(--text-font-weight) \">
                    <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>

                    <ul className="flex flex-col md:flex-row gap-6 md:items-center">
                        {links.map((link , index) => (
                            <li key={index} className="hover:text-(--first-text-yellow-color) transition-colors duration-300"><Link to={`/${link.path}`}>{link.name}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Social Icons */}
                <FooterIcons />
            </div>
        </>
    )
}
