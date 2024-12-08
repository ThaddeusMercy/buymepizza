'use client';

import { Pizza } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ConnectButton } from './connect-button';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity"
          >
            <Pizza className="w-6 h-6 text-[#F9A602]" />
            <span className="font-bold text-xl">BuyMePizza</span>
          </button>

          <ConnectButton />
        </div>
      </div>
    </nav>
  );
}