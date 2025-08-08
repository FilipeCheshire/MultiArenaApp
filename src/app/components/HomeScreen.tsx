"use client";

import React from "react";
import { User, Trophy, Target } from "lucide-react";

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[url('/img/bgBasic.png')] bg-cover bg-center text-white p-6 pb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Olá</h1>
          <div className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
        </div>
        <p className="text-blue-100">Que bom te ver por aqui hoje</p>
      </div>
      <div className="p-6 -mt-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Resumo do Dia</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">5</p>
              <p className="text-sm text-gray-600">Conquistas</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">12</p>
              <p className="text-sm text-gray-600">Desafios</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-800">Atividade Recente</h3>
            <p className="text-gray-600 text-sm mt-1">Você completou 3 desafios hoje!</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800">Nova Conquista</h3>
            <p className="text-gray-600 text-sm mt-1">Parabéns! Você desbloqueou um novo nível.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
