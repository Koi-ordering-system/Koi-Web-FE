import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { useTheme } from "@/hooks";
import Show from "@/lib/show";
import { useUser } from "@clerk/clerk-react";
import { Home, Moon, Sun, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  // Kiểm tra nếu URL có chứa id
  const isDetailPage = !!id || location.pathname.includes("create");

  return (
    <header
      className={`flex items-center ${
        isDetailPage ? "justify-between" : "justify-end"
      } px-10 py-5`}
    >
      {/* Nếu là trang chi tiết, hiển thị nút "Back" */}
      <Show>
        <Show.When isTrue={isDetailPage}>
          <button
            className="p-3 transition-colors duration-300 border rounded-full shadow-sm border-muted-foreground hover:bg-primary/10 shadow-foreground"
            onClick={() => navigate(-1)} // Quay lại trang trước đó
          >
            <ArrowLeft className="size-5" />
          </button>
        </Show.When>
      </Show>
      <div className="flex items-center gap-5">
        <button
          className="p-3 transition-colors duration-300 border rounded-full shadow-sm border-muted-foreground hover:bg-primary/10 shadow-foreground"
          onClick={() => navigate("/")} // Về trang chủ
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
