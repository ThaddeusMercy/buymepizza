"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useWalletUser } from '@/hooks/useWalletUser';

export default function Dashboard() {
  const router = useRouter();
  const { user, loading } = useWalletUser();

  if (loading) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9"
              alt="Profile"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Hi, {user?.username || 'User'}</h1>
            <p className="text-gray-500">buymeapizza.com/{user?.username}</p>
          </div>
        </div>
        <motion.button
          onClick={() => router.push(`/${user?.username}`)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium"
        >
          Share page
        </motion.button>
      </div>

      {/* Earnings Card */}
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Earnings</h2>
          <select className="bg-transparent border border-gray-200 rounded-lg px-3 py-1">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>All time</option>
          </select>
        </div>

        <div className="mb-8">
          <h3 className="text-4xl font-bold">$0</h3>
          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pizza-red rounded-full"></div>
              <span className="text-sm text-gray-600">$0 Supporters</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pizza-yellow rounded-full"></div>
              <span className="text-sm text-gray-600">$0 Membership</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pizza-green rounded-full"></div>
              <span className="text-sm text-gray-600">$0 Shop</span>
            </div>
          </div>
        </div>

        {/* No Supporters Message */}
        <div className="text-center py-12 border-t border-gray-100">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">You don't have any supporters yet</h3>
          <p className="text-gray-600">Share your page with your audience to get started.</p>
        </div>
      </div>
    </div>
  );
}