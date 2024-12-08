"use client";

import { Twitter, Github, Linkedin, Instagram, Globe } from "lucide-react";
import type { UserSocials } from "@/types/user";

interface ProfileLinksProps {
  socials?: UserSocials;
}

export default function ProfileLinks({ socials }: ProfileLinksProps) {
  if (!socials || Object.values(socials).every(value => !value)) {
    return null;
  }

  const links = [
    { icon: Twitter, label: "Twitter", url: socials.twitter },
    { icon: Github, label: "Github", url: socials.github },
    { icon: Linkedin, label: "LinkedIn", url: socials.linkedin },
    { icon: Instagram, label: "Instagram", url: socials.instagram },
    { icon: Globe, label: "Website", url: socials.website }
  ].filter(link => link.url);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Links</h2>
      <div className="space-y-3">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <link.icon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}