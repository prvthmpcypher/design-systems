import React from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, User, Bell, Music, Palette, Download, Shield, HelpCircle, LogOut } from 'lucide-react';

export function Settings() {
  const navigate = useNavigate();

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile Settings', description: 'Edit your profile info' },
        { icon: Shield, label: 'Privacy & Security', description: 'Manage your privacy' },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', description: 'Manage notification settings' },
        { icon: Music, label: 'Playback', description: 'Audio quality and settings' },
        { icon: Palette, label: 'Appearance', description: 'Theme and display' },
        { icon: Download, label: 'Downloads', description: 'Offline content settings' },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', description: 'Get help and contact us' },
        { icon: LogOut, label: 'Log Out', description: 'Sign out of your account' },
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-6 px-6 pb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 pt-2">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-gray-700 hover:bg-white/60 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-[28px] font-bold text-gray-900 tracking-tight">Settings</h1>
      </div>

      {/* Profile Summary */}
      <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgwODkxMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white object-cover shadow-sm"
          />
          <div className="flex-1">
            <h2 className="font-bold text-gray-900 text-[17px]">Sarah Anderson</h2>
            <p className="text-[14px] text-gray-600 mt-0.5">Premium Member</p>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white text-[13px] font-semibold rounded-full hover:bg-gray-800 transition-colors">
            Edit
          </button>
        </div>
      </div>

      {/* Settings Sections */}
      {settingsSections.map((section, sectionIdx) => (
        <div key={sectionIdx} className="flex flex-col gap-3">
          <h3 className="text-[15px] font-bold text-gray-700 px-1">{section.title}</h3>
          <div className="flex flex-col gap-2">
            {section.items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <button
                  key={itemIdx}
                  className="flex items-center gap-4 bg-white/40 backdrop-blur-lg border border-white/60 rounded-[20px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-white/60 transition-all text-left group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0 group-hover:bg-white/80 transition-colors">
                    <Icon size={20} className="text-gray-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-[15px]">{item.label}</h4>
                    <p className="text-[13px] text-gray-600 truncate">{item.description}</p>
                  </div>
                  <ChevronLeft size={18} className="text-gray-400 rotate-180 flex-shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* App Version */}
      <div className="text-center text-[12px] text-gray-500 mt-4">
        Musify v1.0.0
      </div>
    </div>
  );
}
