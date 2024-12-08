'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppKit } from '@reown/appkit/react';
import Navbar from '@/components/Navbar';
import { useWalletUser } from '@/hooks/useWalletUser';
import { validateUsername } from '@/lib/utils/validation';
import { getUserByUsername } from '@/lib/firebase/users';

export default function Username() {
  const [username, setUsername] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const router = useRouter();
  const { open } = useAppKit();
  const { user, isConnected, loading, updateUser } = useWalletUser();

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      if (!isConnected) {
        await open();
        return;
      }

      if (!loading && user?.username) {
        router.replace('/dashboard');
      }
    };

    checkAuthAndRedirect();
  }, [isConnected, open, user, loading, router]);

  // Show nothing while checking authentication state
  if (loading || !isConnected) {
    return null;
  }

  // If user already has a username, they shouldn't see this page
  if (user?.username) {
    return null;
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    setUsername(value);
    setIsAvailable(null);
    setError(null);
  };

  const checkAvailability = async () => {
    if (!username) return;

    setIsChecking(true);
    setError(null);

    const validation = validateUsername(username);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid username'); // Provide fallback error message
      setIsAvailable(false);
      setIsChecking(false);
      return;
    }

    try {
      const existingUser = await getUserByUsername(username);
      setIsAvailable(!existingUser);
      if (existingUser) {
        setError('Username is already taken');
      }
    } catch (err) {
      setError('Error checking username availability');
      setIsAvailable(false);
    } finally {
      setIsChecking(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAvailable || !username) return;

    try {
      await updateUser({ username });
      router.push('/dashboard');
    } catch (err) {
      setError('Error updating username. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Create your account
            </h1>
            <p className="text-gray-600">
              Choose a username for your pizza page.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="pizza-card p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative gap-4">
                <div className="absolute inset-y-0 flex items-center pointer-events-none">
                  <span className="text-gray-500 px-2">buymeapizza.com/</span>
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  onBlur={checkAvailability}
                  className="block w-full pl-[150px] py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
                  placeholder="username"
                  maxLength={10}
                />
                {!isChecking && isAvailable !== null && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    {isAvailable ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                )}
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
              <p className="mt-2 text-sm text-gray-500">
                4-10 characters, letters and numbers only
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={!isAvailable || isChecking}
              className={`w-full flex items-center justify-center py-3 px-4 rounded-full text-white font-medium ${
                isAvailable && !isChecking
                  ? 'bg-[#F9A602] hover:bg-opacity-90'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Continue
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}