import { Circle, LogOut, Menu } from "lucide-react";
interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full px-2 pt-2 pb-0 sm:px-3 sm:pt-2.5 md:pl-58">
      <div className="bg-background/90 max-w-1800px border-black/10 mx-auto rounded-2xl border shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] backdrop-blur-2xl">
        <div className="flex h-14 items-center justify-between gap-3 px-2.5 sm:px-4">
          <div className="flex shrink-0 items-center gap-2">
            {/* User Profile */}
            <div className="">
              <div className="flex items-center gap-3">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
                >
                  <Menu size={20} />
                </button>
                <div className="flex h-9 w-12 items-center justify-center rounded-2xl bg-[#ff8b1e] text-xl font-bold text-white">
                  A
                </div>

                <div>
                  <h2 className="text-sm font-semibold">Afif Dwi Sasonda</h2>
                  <p className="text-xs text-gray-500">User</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="inline-flex h-8 items-center gap-2 rounded-xl bg-emerald-50 px-3.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                <Circle
                    size={8}
                    className="fill-emerald-500 text-emerald-500 animate-pulse"
                />

                <span>Active</span>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}