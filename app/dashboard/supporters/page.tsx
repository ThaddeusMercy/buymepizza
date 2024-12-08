"use client";

import { useState } from "react";
import { Heart, TrendingUp, DollarSign, Users } from "lucide-react";
import StatsCard from "@/components/supporters/StatsCard";
import EmptyState from "@/components/supporters/EmptyState";
import InsightCard from "@/components/supporters/InsightCard";
// import RevenueChart from "@/components/supporters/RevenueChart";

export default function Supporters() {
  const [activeTab, setActiveTab] = useState("Supporters");

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Supporters</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        {["Supporters", "Insights"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-2 relative mr-8 ${
              activeTab === tab
                ? "text-gray-900 font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pizza-red"></div>
            )}
          </button>
        ))}
      </div>

      {activeTab === "Supporters" ? (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <StatsCard value={0} label="Supporter" icon={Heart} />
            <StatsCard value="$0" label="Last 30 days" />
            <StatsCard value="$0" label="All-time" />
          </div>

          <EmptyState
            icon={Heart}
            title="You don't have any supporters yet"
            description="Share your page with your audience to get started."
          />
        </>
      ) : (
        <>
          {/* Insights Content */}
          <div className="space-y-8">
            {/* Overview Cards */}
            <div className="grid grid-cols-3 gap-6">
              <InsightCard icon={TrendingUp} value="0%" label="Growth rate" />
              <InsightCard icon={DollarSign} value="$0" label="Average support" />
              <InsightCard icon={Users} value="0" label="New supporters" />
            </div>

            {/* <RevenueChart /> */}

            <EmptyState
              icon={TrendingUp}
              title="No insights available yet"
              description="Start receiving support to see detailed insights and analytics."
            />
          </div>
        </>
      )}
    </div>
  );
}