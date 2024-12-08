'use client';

import { createAppKit } from '@reown/appkit/react'
import { mainnet, sepolia } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { projectId, metadata } from './config/web3';

const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet],
  projectId
})

createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, sepolia],
  metadata: metadata,
  projectId,
  features: {
    analytics: true,
    socials: [],
    email: false
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {mounted && children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}