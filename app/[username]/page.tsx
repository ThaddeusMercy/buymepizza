"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProfileLinks from "@/components/profile/ProfileLinks";
import SupportForm from "@/components/support/SupportForm";
import { getUserByUsername } from "@/lib/firebase/users";
import { useEffect, useState, use } from "react";
import type { User } from "@/types/user";

interface UserPageProps {
  params: Promise<{ username: string }>;
}

export default function UserPage({ params }: UserPageProps) {
  const { username } = use(params);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getUserByUsername(username);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="w-full h-[200px] bg-gray-200 animate-pulse" />
        <div className="max-w-6xl mx-auto px-4 -mt-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse" />
            <div className="space-y-2">
              <div className="h-6 w-48 bg-gray-300 animate-pulse rounded" />
              <div className="h-4 w-32 bg-gray-300 animate-pulse rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-6xl mx-auto py-12 px-4 text-center">
          <h1 className="text-3xl font-bold">User not found</h1>
          <p className="text-gray-600 mt-2">
            The user <strong>{username}</strong> does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner Image */}
      <div className="w-full h-[200px] relative bg-black">
        <Image
          src={user.images?.bannerImage || "https://images.unsplash.com/photo-1513104890138-7c749659a591"}
          alt="Banner"
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-24 h-24 relative rounded-full border-4 border-white overflow-hidden">
            <Image
              src={user.images?.profileImage || "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9"}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold">{user.name || user.username}</h1>
            <p className="opacity-90">buymeapizza.com/{user.username}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Bio & Links */}
          <div className="space-y-6">
            {/* Bio Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Bio</h2>
              <p className="text-gray-600 leading-relaxed">
                {user.bio || 'No bio available'}
              </p>
            </div>

            <ProfileLinks socials={user.socials} />
          </div>

          {/* Right Column - Support Form */}
          <div>
            <SupportForm user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}