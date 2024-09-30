import { ModeToggle } from "@/components/common";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";

const HomePage = () => {
  const auth = useAuth();

  auth.getToken().then((token) => {
    console.log("Token: ", token);
  });

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
