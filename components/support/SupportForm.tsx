"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Pizza } from "lucide-react";
import PizzaAmountSelector from "./PizzaAmountSelector";
import PizzaButton from "@/components/ui/PizzaButton";
import SupportConfirmationModal from "./SupportConfirmationModal";
import type { User } from "@/types/user";


export default function SupportForm({ user }: { user: User }) {
  const [amount, setAmount] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSupport = () => {
    if (amount && name) {
      setIsModalOpen(true);
    }
  };

  const handleConfirmSupport = () => {
    // Handle the actual support transaction here
    console.log("Support confirmed:", { amount, name, message });
    setIsModalOpen(false);
  };

  const getSupportButtonText = () => {
    if (!amount) return "Support";
    return `Support with $${amount}`;
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-8 shadow-sm sticky top-24"
      >
        <div className="text-center mb-8">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-4"
          >
            <Pizza className="w-full h-full text-pizza-red" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Buy me a pizza!</h2>
          <p className="text-gray-600">
            Support my work by buying me a slice of pizza
          </p>
        </div>

        <div className="mb-8">
          <PizzaAmountSelector onSelect={setAmount} />
        </div>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full py-3 px-4 rounded-lg border border-gray-200 mb-4 focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a message (optional)"
          className="w-full h-24 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent mb-4"
        />

        <PizzaButton
          onClick={handleSupport}
          className={`w-full ${
            amount && name
              ? "bg-pizza-red text-white hover:bg-opacity-90"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!amount || !name}
        >
          {getSupportButtonText()}
        </PizzaButton>

        <p className="text-center text-sm text-gray-500 mt-4">
          All transactions are secure and encrypted
        </p>
      </motion.div>

      <SupportConfirmationModal
        user={user}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmSupport}
        amount={amount || 0}
        name={name}
        message={message}
      />
    </>
  );
}