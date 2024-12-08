'use client';

import { useState, useEffect } from 'react';
import { getUser, updateUser } from '@/lib/firebase/users';
import type { User } from '@/types/user';

export function useUser(address: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUser() {
      if (!address) {
        setLoading(false);
        return;
      }

      try {
        const userData = await getUser(address);
        setUser(userData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [address]);

  const updateUserData = async (newData: Partial<User>) => {
    if (!address) {
      throw new Error('No wallet address provided');
    }

    try {
      await updateUser(address, newData);
      setUser(prev => prev ? { ...prev, ...newData } : null);
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  return {
    user,
    loading,
    error,
    updateUser: updateUserData,
    isInitialized: !loading,
  };
}