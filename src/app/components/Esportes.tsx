"use client";

import React from "react";
import { Trophy } from "lucide-react";

export default function Esportes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[url('/img/bgBasic.png')] bg-cover bg-center text-white p-6 pb-8">
        <h1 className="text-2xl font-bold">Esportes</h1>
        <p className="text-blue-100 mt-2">Conteúdo em desenvolvimento</p>
      </div>

      <div className="p-6 -mt-4 flex items-center justify-center min-h-[24rem]">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-10 h-10 text-gray-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Em Breve</h2>
          <p className="text-gray-500">Esta seção estará disponível em breve</p>
        </div>
      </div>
    </div>
  );
}
