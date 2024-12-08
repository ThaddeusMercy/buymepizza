'use client';

import { useState, useEffect } from 'react';
import { getUserByUsername } from '@/lib/firebase/users';
import type { User } from '@/types/user';

export function useUserByUsername(username: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUser() {
      if (!username) {
        setLoading(false);
        return;
      }

      try {
        const userData = await getUserByUsername(username);
        setUser(userData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [username]);

  return {
    user,
    loading,
    error,
    isInitialized: !loading,
  };
}