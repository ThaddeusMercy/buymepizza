"use client";

import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  value: string | number;
  label: string;
  icon?: LucideIcon;
}

export default function StatsCard({ value, label, icon: Icon }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="flex items-center gap-2 text-gray-600">
        {Icon && <Icon className="w-4 h-4" />}
        <span>{label}</span>
      </div>
    </div>
  );
}