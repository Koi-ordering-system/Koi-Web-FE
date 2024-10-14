import {
  Fish,
  LayoutDashboard,
  LucideProps,
  MessageCircleMore,
  SquareMenu,
  Tractor,
} from "lucide-react";
import { NavLink } from "react-router-dom";

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
  { name: "Koi", href: "/dashboard/koi", icon: Fish },
  { name: "Order", href: "/dashboard/order", icon: SquareMenu },
  { name: "Chatting", href: "/dashboard/chatting", icon: MessageCircleMore },
];

const Menu = () => {
  return (
    <div className="space-y-3">
      {menu.map((item, index) => (
        <NavLink
          to={item.href}
          key={index}
          className={`flex gap-2 rounded-lg hover:bg-primary/30 hover:text-foreground transition-colors duration-300 py-2 px-4`}
        >
          <item.icon />
          <span>{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
