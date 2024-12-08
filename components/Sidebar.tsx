"use client";

import {
  Home,
  Eye,
  Heart,
  ShoppingBag,
  Settings
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: Eye, label: "View page", href: "/viewpage" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: Heart, label: "Supporters", href: "/dashboard/supporters" },
  { icon: ShoppingBag, label: "Shop", href: "/dashboard/shop" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-64 bg-gray-50 h-screen fixed left-0 top-20 border-r border-gray-200 pt-4">
      {menuItems.map((item, index) => (
        <div key={index} className="px-4 py-2">
          {(
            <button
              onClick={() => router.push(item.href)}
              className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm ${pathname === item.href
                  ? "bg-gray-100 text-pizza-red"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}