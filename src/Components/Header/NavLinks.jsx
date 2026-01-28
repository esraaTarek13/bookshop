import { useState } from "react";
import { Link } from "react-router-dom";


export default function NavLinks() {
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
      {links.map((link, index) => (
        <li key={index} className="hover:text-(--first-text-yellow-color) transition-colors duration-300"><Link to={`/${link.path}`}>{link.name}</Link></li>
      ))}
    </>
  )
}
