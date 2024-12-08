"use client";

import { motion } from "framer-motion";
import { Pizza } from "lucide-react";
import Image from "next/image";

export default function ViewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto py-12 px-4">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <Image
              src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9"
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">User</h1>
          <p className="text-gray-600">buymeapizza.com/username</p>
        </div>

        {/* Support Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pizza-card p-8 text-center mb-8"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-6"
          >
            <Pizza className="w-full h-full text-pizza-red" />
          </motion.div>

          <h2 className="text-2xl font-bold mb-4">Support My Work</h2>
          <p className="text-gray-600 mb-8">
            If you enjoy my content and want to support me, consider buying me a slice of pizza!
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { price: "5", slices: "1 Slice" },
              { price: "15", slices: "3 Slices" },
              { price: "25", slices: "Full Pizza" }
            ].map((option) => (
              <motion.button
                key={option.price}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pizza-red text-white py-3 px-4 rounded-xl font-bold hover:shadow-lg transition-all"
              >
                ${option.price} - {option.slices}
              </motion.button>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            {["Monthly", "One-time"].map((type) => (
              <button
                key={type}
                className="text-sm border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Message Section */}
        <div className="pizza-card p-6">
          <textarea
            placeholder="Leave a message (optional)"
            className="w-full h-24 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-500">
              All transactions are secure and encrypted
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pizza-red text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Support
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}