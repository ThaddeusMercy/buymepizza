"use client";

import { LucideIcon } from "lucide-react";

interface InsightCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
}

export default function InsightCard({ icon: Icon, value, label }: InsightCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-6 h-6 text-pizza-red" />
        <span className="text-sm text-gray-500">vs last month</span>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}