import { Link } from "react-router-dom";
import FooterIcons from "./FooterIcons";
import { useState } from "react";


export default function FooterLinks() {
    const [links, setLinks] = useState([
        {
            path: "/",
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
            <div className="flex justify-between items-center pb-4">
                <div className="flex gap-10 font-(--text-font-weight) \">
                    <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>

                    <ul className="flex gap-6 items-center">
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
