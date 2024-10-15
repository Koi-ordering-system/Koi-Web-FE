import assert from "@/assets";
import Menu from "@/components/layout/dashboard-layout/components/menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Separator,
} from "@/components/ui";
import { useAuth } from "@clerk/clerk-react";
import { LogOut } from "lucide-react";

const SiderBar = () => {
  const { signOut } = useAuth();

  return (
    <aside className="flex flex-col justify-between h-screen px-10 py-4 bg-secondary">
      <div className="space-y-6">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <Avatar className="border size-12">
            <AvatarFallback className="text-xs font-medium">KOI</AvatarFallback>
            <AvatarImage src={assert.logo} alt="logo" />
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">KOI</span>
            <span className="font-semibold text-muted-foreground">
              Dashboard
            </span>
          </div>
        </div>
        <Separator className="border border-muted-foreground" />
        {/* Menu */}
        <Menu />
      </div>

      {/* Logout */}
      <Button className="space-x-2" onClick={() => signOut()}>
        <LogOut className="size-4" />
        <span>Logout</span>
      </Button>
    </aside>
  );
};

export default SiderBar;
