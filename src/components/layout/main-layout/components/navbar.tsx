import { useState } from "react";
import { NavLink } from "react-router-dom";

const menu = [
  { name: "Home", href: "/" },
  { name: "Farm", href: "/farm" },
  { name: "Koi", href: "/koi" },
  { name: "Policy", href: "/policy" },
  { name: "Service", href: "/service" },
];

const Navbar = () => {
  const [currentMenu, setCurrentMenu] = useState<number>(1);

  return (
    <div className="items-center justify-center hidden h-full gap-3 space-x-9 md:flex">
      {menu.map((item, index) => (
        <NavLink
          key={index}
          to={item.href}
          className="font-bold text-center"
          onClick={() => setCurrentMenu(index + 1)}
        >
          <span
            className={`hover:text-accent-foreground/60 ${
              currentMenu === index + 1 ? "text-primary " : ""
            }`}
          >
            {item.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
