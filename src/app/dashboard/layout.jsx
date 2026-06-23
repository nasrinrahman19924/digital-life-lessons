import DashboardSidebar from "@/components/shared/DashboardSidebar";

import ProtectedRoute from "@/components/shared/ProtectedRoute";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <DashboardSidebar />

        <main className="flex-1 p-8 bg-slate-50">{children}</main>
      </div>
    </ProtectedRoute>
  );
}
