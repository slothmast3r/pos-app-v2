import React from "react";
import AppSidebar from "./_components/AppSidebar";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <AppSidebar></AppSidebar>
      {children}
    </div>
  );
}
