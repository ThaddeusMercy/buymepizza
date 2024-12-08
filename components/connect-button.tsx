'use client';

import { useAppKit } from '@reown/appkit/react';
import { Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAccount } from 'wagmi';
import { useIsMounted } from '@/hooks/useIsMounted';
import { WalletAvatar } from './wallet/wallet-avatar';
import { WalletName } from './wallet/wallet-name';
import { WalletBalance } from './wallet/wallet-balance';
import { useEnsAvatar } from 'wagmi';
import { useWalletUser } from '@/hooks/useWalletUser';

export function ConnectButton() {
  const mounted = useIsMounted();
  const { open } = useAppKit();
  const { address, isConnected } = useWalletUser();

  const { data: ensAvatar, status: ensAvatarStatus } = useEnsAvatar({
    chainId: 1,
    name: address,
  });

  if (!mounted) {
    return (
      <Button
        className="flex items-center gap-2 bg-[#F9A602] text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all"
        disabled
      >
        <Wallet className="w-5 h-5" />
        Loading...
      </Button>
    );
  }

  if (!isConnected) {
    return (
      <Button
        className="flex items-center gap-2 bg-[#F9A602] text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all"
        onClick={() => open({ view: 'Connect' })}
      >
        <Wallet className="w-5 h-5" />
        Connect Wallet
      </Button>
    );
  }

  return (
    <Button
      className="h-12 rounded-xl"
      variant="outline"
      onClick={() => open({ view: 'Account' })}
    >
      <div className="flex flex-row items-center gap-3">
        <WalletAvatar
          ensAvatar={ensAvatar}
          ensAvatarStatus={ensAvatarStatus === 'pending' ? 'loading' : ensAvatarStatus}
          address={address}
        />
        <div className="flex flex-col text-black items-start">
          <WalletName address={address} />
          <WalletBalance address={address} symbol="ETH" />
        </div>
      </div>
    </Button>
  );
}