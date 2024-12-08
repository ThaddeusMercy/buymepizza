"use client";

import { useSettingsForm } from "@/hooks/useSettingsForm";
import { useToast } from "@/hooks/use-toast";
import PersonalInfoForm from "@/components/settings/PersonalInfoForm";
import SocialLinksForm from "@/components/settings/SocialLinksForm";

export default function Settings() {
  const { toast } = useToast();
  const {
    formData,
    loading,
    error,
    handleChange,
    handleSocialChange,
    handleSubmit
  } = useSettingsForm();

  const handleSave = async () => {
    const success = await handleSubmit();
    if (success) {
      toast({
        title: "Success!",
        description: "Your changes have been saved.",
        variant: "success",
      });
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="h-24 bg-gray-200 rounded-full w-24 mx-auto"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">My account</h1>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      <div className="space-y-8">
        <PersonalInfoForm
          username={formData.username || ''}
          bio={formData.bio || ''}
          name={formData.name || ''}
          onUsernameChange={(value) => handleChange('username', value)}
          onBioChange={(value) => handleChange('bio', value)}
          onNameChange={(value) => handleChange('name', value)}
          onSubmit={handleSave}
        />

        <SocialLinksForm
          socials={formData.socials || {}}
          onSocialChange={handleSocialChange}
          onSubmit={handleSave}
        />
      </div>
    </div>
  );
}