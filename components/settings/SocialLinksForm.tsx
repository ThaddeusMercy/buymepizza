"use client";

import { Twitter, Github, Linkedin, Instagram, Globe } from "lucide-react";
import type { UserSocials } from "@/types/user";

interface SocialLinksFormProps {
  socials: UserSocials;
  onSocialChange: (field: string, value: string) => void;
  onSubmit: () => Promise<void>;
}

export default function SocialLinksForm({
  socials,
  onSocialChange,
  onSubmit
}: SocialLinksFormProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Social Links</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Twitter className="w-5 h-5 text-gray-600" />
          <input
            type="url"
            value={socials.twitter}
            onChange={(e) => onSocialChange("twitter", e.target.value)}
            placeholder="Twitter profile URL"
            className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-gray-600" />
          <input
            type="url"
            value={socials.github}
            onChange={(e) => onSocialChange("github", e.target.value)}
            placeholder="GitHub profile URL"
            className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-3">
          <Linkedin className="w-5 h-5 text-gray-600" />
          <input
            type="url"
            value={socials.linkedin}
            onChange={(e) => onSocialChange("linkedin", e.target.value)}
            placeholder="LinkedIn profile URL"
            className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-3">
          <Instagram className="w-5 h-5 text-gray-600" />
          <input
            type="url"
            value={socials.instagram}
            onChange={(e) => onSocialChange("instagram", e.target.value)}
            placeholder="Instagram profile URL"
            className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-gray-600" />
          <input
            type="url"
            value={socials.website}
            onChange={(e) => onSocialChange("website", e.target.value)}
            placeholder="Personal website URL"
            className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pizza-red focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={onSubmit}
        className="w-full mt-6 bg-pizza-red text-white font-semibold py-3 rounded-full hover:bg-opacity-90 transition-colors"
      >
        Save Social Links
      </button>
    </div>
  );
}