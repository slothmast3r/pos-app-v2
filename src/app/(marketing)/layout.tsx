import React from "react";
import NavigationBar from "./_components/NavigationBar";

function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
}

export default MarketingLayout;
