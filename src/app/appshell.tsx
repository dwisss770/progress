"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import Preloader from "@/components/layout/preloader";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, Math.random() * 1500 + 1500); // 1500ms - 3000ms

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      {sidebarOpen && (
          <div
            className="fixed inset-0 z-55 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <Sidebar sidebarOpen={sidebarOpen} />
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main
        className={`mt-2 px-2 transition-all duration-300 ${
          sidebarOpen ? "md:pl-58" : "md:pl-58"
        }`}
      >
        {children}
      </main>
    </>
  );
}