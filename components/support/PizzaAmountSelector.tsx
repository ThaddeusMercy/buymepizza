"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Pizza } from "lucide-react";

interface PizzaAmountSelectorProps {
  onSelect: (amount: number) => void;
}

const PRICE_PER_SLICE = 5;

export default function PizzaAmountSelector({ onSelect }: PizzaAmountSelectorProps) {
  const [customSlices, setCustomSlices] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleAmountSelect = (slices: number) => {
    const amount = slices * PRICE_PER_SLICE;
    setSelectedAmount(amount);
    onSelect(amount);
    setCustomSlices("");
  };

  const handleCustomSlicesChange = (value: string) => {
    setCustomSlices(value);
    const slices = parseInt(value);
    if (!isNaN(slices) && slices > 0) {
      const amount = slices * PRICE_PER_SLICE;
      setSelectedAmount(amount);
      onSelect(amount);
    } else {
      setSelectedAmount(null);
      onSelect(0);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-4">
        {[1, 3, 5, 10].map((slices) => (
          <motion.button
            key={slices}
            onClick={() => handleAmountSelect(slices)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative group ${
              selectedAmount === slices * PRICE_PER_SLICE
                ? "bg-pizza-red text-white"
                : "bg-white text-pizza-red hover:bg-gray-50"
            } w-16 h-16 rounded-full border-2 border-pizza-red flex items-center justify-center font-bold text-xl transition-colors`}
          >
            <span>{slices}</span>
            <motion.div 
              className="absolute -right-2 -top-2"
              whileHover={{ rotate: 15 }}
            >
              <Pizza className="w-6 h-6 text-pizza-red" />
            </motion.div>
          </motion.button>
        ))}
      </div>

      <div className="relative">
        <input
          type="number"
          value={customSlices}
          onChange={(e) => handleCustomSlicesChange(e.target.value)}
          placeholder="Custom number of slices"
          className="w-full py-3 pl-4 pr-20 rounded-xl border-2 border-pizza-red bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
          min="1"
          step="1"
        />
        <motion.button
          onClick={() => handleCustomSlicesChange(customSlices)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="absolute inset-y-0 right-0 px-4 bg-pizza-red text-white rounded-r-xl font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span>Slices</span>
          <Pizza className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}