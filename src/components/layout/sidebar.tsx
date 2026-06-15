"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { menuItems } from "./menu";
import { Lock } from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
}

export default function Sidebar({ sidebarOpen }: SidebarProps) {
    const pathname = usePathname();
    
  return (
    <aside
      className={`bg-background/90 fixed top-2 left-2 z-70 h-[calc(100vh-16px)] w-54 rounded-2xl border border-black/6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] backdrop-blur-2xl transition-all duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="flex items-center justify-center border-b border-gray-200 px-5 py-5 gap-2">
        <Image
          src="/logos/Kota Pariaman.jpeg"
          alt="Logo"
          width={30}
          height={30}
        />
        <div className="flex flex-wrap items-center">
            <h2 className="text-sm font-semibold">Kota Pariaman</h2>
            <p className="text-xs text-gray-500">Kampung Kandang</p>
        </div>
      </div>

      <nav className="flex flex-col gap-1 p-3">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        const isLocked = item.locked;

        return (
          <Link
            key={item.href}
            href={isLocked ? "#" : item.href}
            onClick={(e) => {
              if (isLocked) e.preventDefault();
            }}
            className={`group relative flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition
              ${
                isLocked
                  ? "opacity-50"
                  : isActive
                  ? "bg-[#3C9379] text-white font-semibold"
                  : "hover:bg-accent"
              }`}
          >
            <Icon size={18} />

            <span className="flex-1">{item.title}</span>

            {/* LOCK ICON */}
            {isLocked && (
              <Lock size={14} className="text-gray-500" />
            )}
          </Link>
        );
      })}
    </nav>
    </aside>
  );
}
