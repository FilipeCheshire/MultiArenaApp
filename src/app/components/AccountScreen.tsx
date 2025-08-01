"use client";

import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, Calendar, MapPin, Edit } from 'lucide-react';
import { auth } from '../../../lib/firebase';

interface AccountScreenProps {
  onLogout: () => void;
}

export default function AccountScreen({ onLogout }: AccountScreenProps) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || '');
      setEmail(user.email || '');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[url('/img/bgBasic.png')] bg-cover bg-center text-white p-6 pb-8">
        <h1 className="text-2xl font-bold">Minha Conta</h1>
        <p className="text-blue-100 mt-2">Gerencie suas informações pessoais</p>
      </div>

      <div className="p-6 -mt-4 space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{displayName}</h2>
                <p className="text-gray-600">Membro</p>
              </div>
            </div>
            <Edit className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações Pessoais</h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
              <Mail className="w-5 h-5 text-gray-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-800">{email}</p>
              </div>
            </div>
            {/* Aqui você pode adicionar telefone, nascimento, localização, etc */}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Ações da Conta</h3>

          <div className="space-y-3">
            <button
              onClick={onLogout}
              className="w-full text-left p-3 rounded-xl hover:bg-red-50 transition-colors text-red-600"
            >
              <p className="font-medium">Sair da Conta</p>
              <p className="text-sm">Fazer logout do aplicativo</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
