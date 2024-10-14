import SiderBar from "@/components/layout/dashboard-layout/components/siderbar";
import Footer from "@/components/layout/dashboard-layout/footer";
import Header from "@/components/layout/dashboard-layout/header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SiderBar />
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
