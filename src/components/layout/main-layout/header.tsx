import Navbar from "@/components/layout/main-layout/components/navbar";
import Profile from "@/components/layout/main-layout/components/profile";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 w-full bg-accent text-accent-foreground">
      <main className="container flex items-center justify-between py-4">
        <div>Logo</div>
        <Navbar />
        <Profile />
      </main>
    </div>
  );
};

export default Header;
