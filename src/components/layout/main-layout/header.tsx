import assert from "@/assets";
import Navbar from "@/components/layout/main-layout/components/navbar";
import Profile from "@/components/layout/main-layout/components/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-10 w-full shadow-custom bg-accent text-accent-foreground">
      <main className="container flex items-center justify-between py-4">
        <div
          className="flex items-center justify-center gap-2 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Avatar>
            <AvatarImage src={assert.logo} alt="Koi" />
            <AvatarFallback>
              <span>Koi</span>
            </AvatarFallback>
          </Avatar>
          <span className="text-2xl italic font-bold">PicoKoi</span>
        </div>
        <Navbar />
        <Profile />
      </main>
    </div>
  );
};

export default Header;
