"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pizza, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { User } from "@/types/user";
interface SupportConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  name: string;
  message: string;
  user: User;
}

export default function SupportConfirmationModal({
  isOpen,
  onClose,
  amount,
  name,
  message,
  user
}: SupportConfirmationModalProps) {
  const [showPayment, setShowPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = () => {
    setShowPayment(true);
  };

  const handleClose = () => {
    setShowPayment(false);
    onClose();
  };

  const handlePayment = async () => {
    setIsLoading(true);
    const data = {
      user,
      amount,
      name,
      message,
      timestamp: new Date().toISOString()
    };

    const encodedData = encodeURIComponent(JSON.stringify(data));
    window.location.href = `https://pay.buymepizza.xyz?data=${encodedData}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-fit overflow-hidden bg-white p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-900">
            {showPayment ? "Complete Payment" : "Confirm Support"}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!showPayment ? (
            <motion.div
              key="confirmation"
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6 py-4"
            >
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16"
                >
                  <Pizza className="w-full h-full text-pizza-red" />
                </motion.div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-2xl font-bold text-pizza-red">${amount}</p>
                <p className="text-gray-600">From: {name}</p>
                {message && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">{message}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-4">
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-6 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="w-full sm:w-auto px-6 py-2 bg-pizza-red text-white rounded-full hover:bg-opacity-90 transition-colors"
                >
                  Confirm Support
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="payment"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="py-4"
            >
              <button
                onClick={() => setShowPayment(false)}
                className="mb-4 text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-2"
              >
                <span>←</span>
                <span>Back to confirmation</span>
              </button>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg text-center mb-6">
                  <p className="text-lg font-semibold text-gray-900">Total Amount</p>
                  <p className="text-2xl font-bold text-pizza-red">${amount}</p>
                </div>
                <div>
                </div>
                <p className="text-center text-sm text-gray-500">
                  Secure payment powered by Request Network
                </p>
              </div>

              <button
                onClick={handlePayment}
                disabled={isLoading}
                className="w-full px-6 py-2 bg-pizza-red text-white rounded-full hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Complete Payment"
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}