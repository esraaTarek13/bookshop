import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/NavLinks";

export default function NavLinks() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            to={`/${link.path}`}
            onClick={() => handleClick(index)}
            className={`text-[16px] lg:text-[18px] transition-colors duration-300 ${activeIndex === index ? "text-(--first-text-yellow-color)" : "hover:text-(--first-text-yellow-color)"
              }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}
