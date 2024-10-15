import { LayoutDashboard } from "lucide-react";

const DashboardPage = () => {
  return (
    <main className="grid w-full h-full place-content-center">
      <div className="flex items-center gap-5 text-muted">
        <LayoutDashboard size={64} />
        <div className="text-3xl font-bold">Welcome to Koi Ordering System</div>
      </div>
    </main>
  );
};

export default DashboardPage;
