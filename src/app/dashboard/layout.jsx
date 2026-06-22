import DashboardSidebar from "@/components/shared/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <DashboardSidebar />

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
