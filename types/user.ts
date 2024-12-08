export interface UserSocials {
  twitter?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
}

export interface UserImages {
  bannerImage?: string;
  profileImage?: string;
}

export interface User {
  address: string;
  username: string;
  name?: string;
  bio?: string;
  socials?: UserSocials;
  images?: UserImages;
}