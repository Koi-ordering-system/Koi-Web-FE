import { ModeToggle } from "@/components/common";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const HomePage = () => {
  return (
    <div>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <h1 className="text-2xl">Home Page</h1>
      <p>Welcome </p>

      <ModeToggle />
    </div>
  );
};

export default HomePage;
