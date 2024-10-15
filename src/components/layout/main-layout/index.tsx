import Footer from "@/components/layout/main-layout/footer";
import Header from "@/components/layout/main-layout/header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
