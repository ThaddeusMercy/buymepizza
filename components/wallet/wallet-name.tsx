'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useEnsName } from 'wagmi';

interface WalletNameProps {
  address?: string;
}

export function WalletName({ address }: WalletNameProps) {
  const { data: ensName, status: ensNameStatus } = useEnsName({
    chainId: 1,
    address,
  });

  const formattedAddress = address
    ? `${address.slice(0, 4)}...${address.slice(-3)}`
    : '';

  if (ensNameStatus !== 'success') {
    return <Skeleton className="h-4 w-24" />;
  }

  return <span className="font-semibold">{ensName ?? formattedAddress}</span>;
}
