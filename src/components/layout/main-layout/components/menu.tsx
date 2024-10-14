import DialogCustom from "@/components/common/dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Label,
} from "@/components/ui";
import { useTheme } from "@/hooks";
import { useAuth, UserProfile, useUser } from "@clerk/clerk-react";
import { Sun, Moon, LogOut, User, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuProfile = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild className="after:border after:border-none">
          <Avatar className="size-10 hover:cursor-pointer hover:bg-secondary ">
            <AvatarFallback>{user?.username}</AvatarFallback>
            <AvatarImage src={user?.imageUrl} alt={user?.username || ""} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleToggle}>
            {!isDarkMode ? (
              <Sun className="mr-2 size-5" />
            ) : (
              <Moon className="mr-2 size-5" />
            )}
            <Label>Theme mode</Label>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            <User className="mr-2 size-5" />
            <Label>Profile</Label>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard")}>
            <LayoutDashboard className="mr-2 size-5" />
            <Label>Dashboard</Label>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 size-5" />
            <Label>Logout</Label>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogCustom
        isOpen={isDialogOpen}
        onClose={close}
        children={
          <div className="relative">
            <Button
              className="absolute z-10 bottom-3 right-3"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </Button>
            <UserProfile />
          </div>
        }
      />
    </>
  );
};

export default MenuProfile;
