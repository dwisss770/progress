import {
  LayoutDashboard,
  Users,
  Trophy,
  Award,
  User,
  GraduationCap,
} from "lucide-react";

export const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    locked: false,
  },
  {
    title: "Formasi",
    href: "/for",
    icon: Users,
    locked: true,
  },
  {
    title: "MPL/EWC/M-Series",
    href: "/max",
    icon: Trophy,
    locked: true,
  },
  {
    title: "Prestasi",
    href: "/tes",
    icon: Award,
    locked: true,
  },
  {
    title: "Profile",
    href: "/pro",
    icon: User,
    locked: true,
  },
];