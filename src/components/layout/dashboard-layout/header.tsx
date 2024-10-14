import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { useTheme } from "@/hooks";
import { useUser } from "@clerk/clerk-react";
import { Home, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useUser();
  const navigation = useNavigate();
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <header className="grid px-10 py-5 place-content-end">
      <div className="flex items-center gap-5">
        <button
          className="p-3 transition-colors duration-300 border rounded-full shadow-sm border-muted-foreground hover:bg-primary/10 shadow-foreground"
          onClick={() => navigation("/")}
        >
          <Home className="size-5" />
        </button>
        <button
          className="p-3 transition-colors duration-300 border rounded-full shadow-sm border-muted-foreground hover:bg-primary/10 shadow-foreground"
          onClick={handleToggle}
        >
          {isDarkMode ? (
            <Sun className="size-5" />
          ) : (
            <Moon className="size-5" />
          )}
        </button>
        <div className="relative flex items-center gap-3 p-2 pl-5 pr-10 overflow-visible border rounded-full shadow-sm shadow-muted-foreground">
          <div>
            {user?.lastName} {user?.firstName}
          </div>

          <Avatar className="absolute size-12 -right-4">
            <AvatarFallback className="text-xs font-medium">KOI</AvatarFallback>
            <AvatarImage
              src={user?.imageUrl ?? undefined}
              alt={user?.username ?? undefined}
            />
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
