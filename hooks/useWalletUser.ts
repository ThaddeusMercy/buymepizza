'use client';

import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { getUser, createUser } from '@/lib/firebase/users';
import { useUser } from './useUser';

export function useWalletUser() {
  const { address, isConnected } = useAccount();
  const { user, loading, error, updateUser } = useUser(address || '');

  useEffect(() => {
    async function initializeUser() {
      if (!address || !isConnected) return;

      try {
        const existingUser = await getUser(address);
        
        if (!existingUser) {
          await createUser(address, {
            username: '',
            bio: '',
            socials: {
              twitter: '',
              github: '',
              instagram: '',
              website: ''
            },
            images: {
              bannerImage: '',
              profileImage: ''
            },
            address: ''
          });
        }
      } catch (error) {
        console.error('Error initializing user:', error);
      }
    }

    initializeUser();
  }, [address, isConnected]);

  return {
    user,
    loading,
    error,
    updateUser,
    isConnected,
    address
  };
}