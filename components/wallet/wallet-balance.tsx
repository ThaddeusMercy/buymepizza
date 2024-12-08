'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { BigNumber } from 'bignumber.js';
import { useBalance } from 'wagmi';

interface WalletBalanceProps {
  address?: `0x${string}`;
  symbol?: string;
}

export function WalletBalance({ address, symbol }: WalletBalanceProps) {
  const { data: balance, status } = useBalance({ address });

  const formattedBalance = (() => {
    if (status === 'success' && balance) {
      return BigNumber(Number(balance.value))
        .dividedBy(10 ** balance.decimals)
        .toFixed(4);
    }
    return '';
  })();

  if (status !== 'success') {
    return <Skeleton className="h-3 w-16 pt-[2px]" />;
  }

  return (
    <span className="text-xs font-medium text-neutral-600">
      {formattedBalance} {symbol}
    </span>
  );
}
