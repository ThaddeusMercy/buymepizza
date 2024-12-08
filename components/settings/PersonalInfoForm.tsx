"use client";

import { Camera } from "lucide-react";
import Image from "next/image";

interface PersonalInfoFormProps {
  username: string;
  name: string;
  bio: string;
  onUsernameChange: (value: string) => void;
  onBioChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onSubmit: () => Promise<void>;
}

export default function PersonalInfoForm({
  username,
  name,
  bio,
  onUsernameChange,
  onBioChange,
  onNameChange,
  onSubmit
}: PersonalInfoFormProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Personal Info</h2>

      <div className="mb-8">
        <div className="w-24 h-24 relative mx-auto mb-4">
          <Image
            src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9"
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Camera className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 pr-2 flex items-center pointer-events-none">
              <span className="text-gray-500">buymeapizza.com/</span>
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => onUsernameChange(e.target.value)}
              className="w-full pl-[155px] p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            About Me
          </label>
          <textarea
            value={bio}
            onChange={(e) => onBioChange(e.target.value)}
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent resize-none"
            placeholder="Tell your supporters about yourself..."
          />
        </div>
      </div>

      <button
        onClick={onSubmit}
        className="w-full bg-pizza-red text-white font-semibold py-3 rounded-full mt-6 hover:bg-opacity-90 transition-colors"
      >
        Save Changes
      </button>
    </div>
  );
}