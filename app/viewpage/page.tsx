"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProfileLinks from "@/components/profile/ProfileLinks";
import SupportForm from "@/components/support/SupportForm";
import { useWalletUser } from "@/hooks/useWalletUser";
import type { User } from "@/types/user";

export default function ViewPage() {
  const { user } = useWalletUser();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner Image */}
      <div className="w-full h-[200px] relative bg-black">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          alt="Banner"
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-24 h-24 relative rounded-full border-4 border-white overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold">{user?.name || user?.username || 'Username'}</h1>
            <p className="opacity-90">buymeapizza.com/{user?.username}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Bio & Links */}
          <div className="space-y-6">
            {/* Bio Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Bio</h2>
              <p className="text-gray-600 leading-relaxed">
                {user?.bio || 'No bio available'}
              </p>
            </div>

            <ProfileLinks socials={user?.socials} />
          </div>

          {/* Right Column - Support Form */}
          <div>
            <SupportForm user={user as User}/>
          </div>
        </div>
      </div>
    </div>
  );
}