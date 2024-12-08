'use client';

import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

interface WalletAvatarProps {
  ensAvatar?: string | null;
  ensAvatarStatus: 'idle' | 'error' | 'loading' | 'success';
  address?: string;
}

export function WalletAvatar({ ensAvatar, ensAvatarStatus, address }: WalletAvatarProps) {
  if (ensAvatarStatus === 'loading') {
    return <Skeleton className="h-9 w-9 rounded-full" />;
  }

  return (
    <Image
      alt="Wallet Avatar"
      width={36}
      height={36}
      className="h-9 w-9 rounded-full"
      src={ensAvatar ?? `https://api.dicebear.com/8.x/shapes/svg?seed=${address ?? ''}`}
    />
  );
}