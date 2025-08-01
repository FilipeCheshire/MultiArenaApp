"use client";

import React from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";

interface RegisterFormProps {
  registerData: { email: string; password: string; firstName: string; lastName: string };
  setRegisterData: React.Dispatch<React.SetStateAction<{ email: string; password: string; firstName: string; lastName: string }>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  toggleMode: () => void;
}

export default function RegisterForm({
  registerData,
  setRegisterData,
  showPassword,
  setShowPassword,
  onSubmit,
  toggleMode,
}: RegisterFormProps) {
  return (
    <div className="min-h-screen bg-blue-600 bg-[url('/img/background.png')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-3xl shadow-2xs p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mx-auto mb-4">
              <Image src="/img/logo.png" alt="Logo da empresa" width={120} height={120} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Crie sua conta</h1>
            <p className="text-gray-600 mt-2">Cadastre-se para começar</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Nome"
                value={registerData.firstName}
                onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                className="w-full px-4 py-4 border text-black border-gray-500 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Sobrenome"
                value={registerData.lastName}
                onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                className="w-full px-4 py-4 border text-black border-gray-500 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-4 border text-black border-gray-500 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                className="w-full pl-12 pr-4 py-4 border text-black border-gray-500 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Cadastrar
            </button>
          </form>

          <div className="text-center mt-6">
            <button type="button" onClick={toggleMode} className="text-blue-600 hover:underline text-sm">
              Já tem conta? Faça login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
