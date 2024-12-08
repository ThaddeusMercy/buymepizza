"use client";

import { useState, useEffect } from 'react';
import { useWalletUser } from './useWalletUser';
import { validateUsername } from '@/lib/utils/validation';
import type { User } from '@/types/user';

export function useSettingsForm() {
  const { user, updateUser, address } = useWalletUser();
  const [formData, setFormData] = useState<Partial<User>>({
    username: '',
    name: '',
    bio: '',
    socials: {
      twitter: '',
      github: '',
      linkedin: '',
      instagram: '',
      website: ''
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || '',
        name: user.name || '',
        bio: user.bio || '',
        socials: {
          twitter: user.socials?.twitter || '',
          github: user.socials?.github || '',
          linkedin: user.socials?.linkedin || '',
          instagram: user.socials?.instagram || '',
          website: user.socials?.website || ''
        }
      });
      setLoading(false);
    }
  }, [user]);

  const handleChange = (field: string, value: string) => {
    if (field === 'username') {
      const validation = validateUsername(value, user?.username);
      if (!validation.isValid) {
        setError(validation.error);
        return;
      }
      setError(null);
    }

    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socials: {
        ...prev.socials,
        [field]: value
      }
    }));
  };

  const handleSubmit = async () => {
    try {
      setError(null);
      if (!address) throw new Error('No wallet connected');
      
      const validation = validateUsername(formData.username || '', user?.username);
      if (!validation.isValid) {
        setError(validation.error);
        return false;
      }

      await updateUser({ ...formData, address });
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
      return false;
    }
  };

  return {
    formData,
    loading,
    error,
    handleChange,
    handleSocialChange,
    handleSubmit
  };
}