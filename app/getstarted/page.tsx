"use client";

import { motion } from "framer-motion";
import { Pizza } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pizza-card p-8 md:p-12 max-w-2xl w-full text-gray-900 text-center"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 mx-auto mb-8"
          >
            <Pizza className="w-full h-full text-pizza-red" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-pizza-red">
            Buy Me Pizza! 🍕
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            If you enjoy my work and want to support me, consider buying me a slice of pizza!
            Every slice fuels more awesome content.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { price: "5", slices: "1 Slice" },
              { price: "15", slices: "3 Slices" },
              { price: "25", slices: "Full Pizza" }
            ].map((option) => (
              <motion.button
                key={option.price}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pizza-red text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
              >
                ${option.price} - {option.slices}
              </motion.button>
            ))}
          </div>

          <div className="text-gray-600">
            <p className="mb-4">Your support means the world! 🌍</p>
            <div className="flex justify-center space-x-4">
              {["Monthly", "One-time"].map((type) => (
                <button
                  key={type}
                  className="text-sm border border-gray-200 px-4 py-2 rounded-full
                  hover:bg-gray-50 transition-colors"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}