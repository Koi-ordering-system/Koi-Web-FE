import MenuProfile from "@/components/layout/main-layout/components/menu";
import { Button } from "@/components/ui";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { ArrowBigRight, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigator = useNavigate();

  return (
    <div>
      <SignedOut>
        <Button onClick={() => navigator("/sign-in")}>
          <span className="font-semibold">Sign In</span>
          <ArrowBigRight className="size-5" />
        </Button>
      </SignedOut>
      <SignedIn>
        <div className="flex items-center justify-center gap-3">
          <Button variant="ghost">
            <ShoppingCart className="size-5" />
            <span className="hidden font-semibold">Shop</span>
          </Button>
          <MenuProfile />
        </div>
      </SignedIn>
    </div>
  );
};

export default Profile;
