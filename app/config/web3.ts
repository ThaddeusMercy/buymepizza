import { Chain } from 'wagmi/chains';

export const projectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ||
  '8c5c43b65e4a8cea2c10511cbbed36c4';

export const metadata = {
  name: 'Buy Me Pizza',
  description: 'Support creators with pizza slices!',
  url: 'https://buymepizza.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const chains: Chain[] = [
  {
    id: 1,
    name: 'Ethereum',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: { http: ['https://eth.llamarpc.com'] },
      default: { http: ['https://eth.llamarpc.com'] },
    },
    blockExplorers: {
      etherscan: { name: 'Etherscan', url: 'https://etherscan.io' },
      default: { name: 'Etherscan', url: 'https://etherscan.io' },
    },
  },
];
