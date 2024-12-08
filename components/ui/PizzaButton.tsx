"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PizzaButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function PizzaButton({ onClick, children, className = "", disabled = false }: PizzaButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      className={`bg-pizza-red text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </motion.button>
  );
}