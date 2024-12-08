"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Bell } from "lucide-react";

export default function Shop() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Shop</h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-12 shadow-sm text-center"
      >
        <motion.div 
          className="w-24 h-24 mx-auto mb-8 bg-gray-50 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <ShoppingBag className="w-12 h-12 text-pizza-red" />
        </motion.div>

        <h2 className="text-3xl font-bold mb-4">Shop Coming Soon!</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          We're working hard to bring you an amazing shopping experience. Soon you'll be able to sell your merchandise, digital products, and more!
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            {
              icon: Star,
              title: "Feature-Rich Store",
              description: "Sell physical & digital products with powerful e-commerce features"
            },
            {
              icon: Bell,
              title: "Get Notified",
              description: "Be the first to know when our shop feature launches"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-xl border-2 border-dashed border-gray-200"
            >
              <feature.icon className="w-8 h-8 text-pizza-red mb-4" />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-pizza-red text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
        >
          Notify me when it's ready
        </motion.button>
      </motion.div>
    </div>
  );
}