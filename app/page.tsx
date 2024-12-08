'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useAppKit } from '@reown/appkit/react';
import { useWalletUser } from '@/hooks/useWalletUser';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const { open } = useAppKit();
  const { user, isConnected, loading } = useWalletUser();

  const handleGetStarted = async () => {
    if (!isConnected) {
      await open();
      return;
    }

    if (!loading && user?.username) {
      router.push('/dashboard');
    } else {
      router.push('/username');
    }
  };

  const cards = [
    {
      name: 'Pepperoni Pizza',
      freshness: 'Fresh for 3 more days',
      count: 4,
      gradient: 'from-green-300 to-green-400',
    },
    {
      name: 'Hawaiian Pizza',
      freshness: 'Fresh for 3 more days',
      count: 2,
      gradient: 'from-yellow-200 to-yellow-300',
    },
    {
      name: 'Margherita Pizza',
      freshness: 'Fresh for 8 more days',
      count: 2,
      gradient: 'from-pink-200 to-pink-300',
    },
    {
      name: 'Veggie Pizza',
      freshness: 'Fresh for 14 more days',
      count: 1,
      gradient: 'from-orange-200 to-orange-300',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full bg-white overflow-hidden flex flex-col justify-center items-center text-center pt-20">
        {/* Large Title */}
        <p className="mt-4 text-black-200 text-[2vw] max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          Buy Me
        </p>
        <h1 className="text-black-600 font-bold uppercase text-[12vw] leading-none">
          PIZZA
        </h1>
        <p className="mt-4 text-grey-200 text-base max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          Accept support. Start a membership. Setup a shop. It&apos;s easier than you
          think.
        </p>

        {/* Get Started Button */}
        <button
          className="mt-6 bg-[#F9A602] text-black font-semibold py-2 px-6 rounded-full hover:bg-[#FFB732] transition cursor-pointer"
          onClick={handleGetStarted}
        >
          {isConnected ? 'Get Started' : 'Connect Wallet'}
        </button>

        {/* Pizza Cool SVG */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/assets/images/pizaza.png"
              alt="Cool Pizza Character"
              width={900}
              height={300}
              className="drop-shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Support Demo Section */}
      <section className="relative w-full min-h-screen mt-[-550px] bg-[#DCEFFF] flex items-center justify-center font-sans p-8 overflow-hidden">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="font-bold text-green-700 uppercase leading-none text-[15vw] md:text-[10vw] tracking-tighter">
            Bite
          </span>
          <span className="font-bold text-green-700 uppercase leading-none text-[15vw] md:text-[10vw] tracking-tighter">
            Into
          </span>
          <span className="font-bold text-green-700 uppercase leading-none text-[15vw] md:text-[10vw] tracking-tighter">
            Good
          </span>
        </div>

        {/* Pizza Emoji (Centered in front, very large) */}
        <div className="relative z-10">
          <span className="text-[20vw] md:text-[15vw] block">🍕</span>
        </div>

        {/* Card 1 (upper-left) */}
        <div className="absolute top-[30%] left-[15%] z-20">
          <div className="border border-black bg-transparent p-4 text-black max-w-[150px] text-sm leading-snug">
            <h3 className="font-bold uppercase mb-2">No Bad Stuff</h3>
            <p>
              Our products are pesticide-free, which is better for your plate
              and the planet.
            </p>
          </div>
        </div>

        {/* Card 2 (lower-right) */}
        <div className="absolute bottom-[30%] right-[15%] z-20">
          <div className="border border-black bg-transparent p-4 text-black max-w-[150px] text-sm leading-snug">
            <h3 className="font-bold uppercase mb-2">100% Traceable</h3>
            <p>
              Our produce gets tracked from sweet little seed to sweet lucky
              shelf.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-col items-center justify-center mx-auto gap-8">
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-3xl md:text-7xl leading-tight text-center mb-4">
              Don&apos;t let your food go to waste.
            </h1>
            <p className="text-green-400 text-base md:text-base text-center">
              Kiff tracks your food&apos;s state and orders it by priority, so
              you will <br /> know what to eat at a glance.
            </p>
          </div>
          {/* Left side: Cards grid */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl p-4 text-black bg-gradient-to-br ${card.gradient} flex flex-col justify-between h-40`}
              >
                {/* Pizza Emoji Icon */}
                <span className="text-2xl">🍕</span>

                {/* Text */}
                <div>
                  <h2 className="font-semibold text-black text-lg">
                    {card.name}
                  </h2>
                  <p className="text-black text-sm">{card.freshness}</p>
                </div>

                {/* Number Circle (top-right) */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {card.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#FBF7ED] text-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="text-sm text-gray-700">© Buy Me Pizza</div>

          {/* Middle Links */}
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <Link href="/" className="text-sm font-semibold hover:underline">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-semibold hover:underline">
              Shop
            </Link>
            <Link
              href="/features"
              className="text-sm font-semibold hover:underline"
            >
              Features
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            {/* Twitter (X) Icon */}
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-6 h-6 text-black hover:text-gray-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 0 1 1.414 0L12 10.586l6.293-6.293a1 1 
                0 0 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 1 1-1.414 1.414L12 13.414l-6.293 
                6.293a1 1 0 1 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Mail Icon */}
            <a
              href="mailto:support@example.com"
              aria-label="Mail"
              className="inline-flex items-center justify-center w-6 h-6 text-black hover:text-gray-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 
                2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 
                19.5v-15Zm2.928 2.028a.75.75 0 1 0-1.356.588l.025.06 6 
                9a.75.75 0 0 0 1.266 0l6-9a.75.75 0 1 0-1.264-.84L12 
                13.42l-6.822-6.892Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}