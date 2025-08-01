"use client";

import React from 'react';
import { Home, Trophy, Target, UserCircle, Settings } from 'lucide-react';

interface BottomMenuProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

export default function BottomMenu({ activeScreen, setActiveScreen }: BottomMenuProps) {
  const menuItems = [
    { label: 'Início', icon: Home, screen: 'home' },
    { label: 'Esportes', icon: Trophy, screen: 'esportes' },
    { label: 'Desafios', icon: Target, screen: 'desafios' },
    { label: 'Conta', icon: UserCircle, screen: 'account' },
    { label: 'Configurações', icon: Settings, screen: 'configuracoes' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 z-50">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeScreen === item.screen;
        return (
          <button
            key={item.screen}
            onClick={() => setActiveScreen(item.screen)}
            className={`flex flex-col items-center px-4 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
