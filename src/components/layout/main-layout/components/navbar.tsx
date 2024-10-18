import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const menu = [
  { name: "Home", href: "/" },
  { name: "Farm", href: "/farm" },
  { name: "Policy", href: "/policy" },
  { name: "Service", href: "/service" },
];

const Navbar = () => {
  const [currentMenu, setCurrentMenu] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrentMenu(currentPath);
  }, [location.pathname]);

  return (
    <div className="items-center justify-center hidden h-full gap-3 space-x-9 md:flex">
      {menu.map((item, index) => (
        <NavLink key={index} to={item.href} className="font-bold text-center">
          <span
            className={`hover:text-accent-foreground/60 ${
              currentMenu === item.href ? "text-primary" : ""
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
