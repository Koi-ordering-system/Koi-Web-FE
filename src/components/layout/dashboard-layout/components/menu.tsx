import {
  Fish,
  FishIcon,
  Layers,
  LayoutDashboard,
  LucideProps,
  MessageCircleMore,
  Plane,
  SquareChartGantt,
  SquareMenu,
  Tractor,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

interface MenuProps {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

const menu: MenuProps[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Farm", href: "/dashboard/farm", icon: Tractor },
  { name: "Species Koi", href: "/dashboard/species-koi", icon: FishIcon },
  { name: "Traveling", href: "/dashboard/traveling", icon: Plane },
  { name: "Order", href: "/dashboard/order", icon: SquareMenu },
  { name: "Feedback", href: "/dashboard/feedback", icon: SquareChartGantt },
  { name: "Chatting", href: "/dashboard/chatting", icon: MessageCircleMore },
];

const Menu = () => {
  const location = useLocation();

  return (
    <div className="space-y-3">
      {menu.map((item, index) => (
        <NavLink
          to={item.href}
          key={index}
          className={`flex gap-2 rounded-lg py-2 px-6 transition-colors duration-300 ${
            location.pathname === item.href
              ? "bg-primary/50 text-foreground"
              : "hover:bg-primary/30 hover:text-foreground"
          }`}
        >
          <item.icon />
          <span>{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
