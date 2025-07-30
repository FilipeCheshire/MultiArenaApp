"use client"

import React, { useState } from 'react';
import {
  User,
  Lock,
  Home,
  Trophy,
  Target,
  UserCircle,
  Settings,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Eye,
  EyeOff
} from 'lucide-react';


export default function MobileApp() {

  const [currentScreen, setCurrentScreen] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    birthDate: '15/03/1990',
    address: 'São Paulo, SP',
    memberSince: '2023'
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      setCurrentScreen('home');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('login');
    setLoginData({ email: '', password: '' });
  };

  const menuItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'esportes', label: 'Esportes', icon: Trophy },
    { id: 'desafios', label: 'Desafios', icon: Target },
    { id: 'conta', label: 'Conta', icon: UserCircle },
    { id: 'configurações', label: 'Config', icon: Settings }
  ];

  const renderLogin = () => (
    <div className="min-h-screen bg-blue-600 bg-[url('/img/background.png')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-3xl shadow-2xs p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Bem-vindo</h1>
            <p className="text-gray-600 mt-2">Entre com sua conta</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-4 border text-black border-gray-500 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full pl-12 pr-4 py-4 border text-black border-gray-500 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
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
              Entrar
            </button>
          </form>

          <div className="text-center mt-6">
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Esqueceu a senha?
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[url('/img/bgBasic.png')] bg-cover bg-center text-white p-6 pb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Olá, {userData.name.split(' ')[0]}!</h1>
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

  const renderAccount = () => (
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
                <h2 className="text-xl font-bold text-gray-800">{userData.name}</h2>
                <p className="text-gray-600">Membro desde {userData.memberSince}</p>
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
                <p className="font-medium text-gray-800">{userData.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
              <Phone className="w-5 h-5 text-gray-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Telefone</p>
                <p className="font-medium text-gray-800">{userData.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Data de Nascimento</p>
                <p className="font-medium text-gray-800">{userData.birthDate}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Localização</p>
                <p className="font-medium text-gray-800">{userData.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Ações da Conta</h3>

          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <p className="font-medium text-gray-800">Editar Perfil</p>
              <p className="text-sm text-gray-600">Alterar informações pessoais</p>
            </button>

            <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <p className="font-medium text-gray-800">Alterar Senha</p>
              <p className="text-sm text-gray-600">Atualize sua senha de acesso</p>
            </button>

            <button
              onClick={handleLogout}
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

  const renderOtherScreens = (screenId: string) => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[url('/img/bgBasic.png')] bg-cover bg-center text-white p-6 pb-8">
        <h1 className="text-2xl font-bold capitalize">{screenId}</h1>
        <p className="text-blue-100 mt-2">Conteúdo em desenvolvimento</p>
      </div>

      <div className="p-6 -mt-4 flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            {screenId === 'esportes' && <Trophy className="w-10 h-10 text-gray-500" />}
            {screenId === 'desafios' && <Target className="w-10 h-10 text-gray-500" />}
            {screenId === 'configurações' && <Settings className="w-10 h-10 text-gray-500" />}
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Em Breve</h2>
          <p className="text-gray-500">Esta seção estará disponível em breve</p>
        </div>
      </div>
    </div>
  );

  const renderBottomMenu = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
      <div className="flex justify-around">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentScreen === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all ${isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              <IconComponent className={`w-6 h-6 mb-1 ${isActive ? 'text-blue-600' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  if (!isLoggedIn) {
    return renderLogin();
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {currentScreen === 'home' && renderHome()}
      {currentScreen === 'conta' && renderAccount()}
      {['esportes', 'desafios', 'configurações'].includes(currentScreen) && renderOtherScreens(currentScreen)}

      {renderBottomMenu()}
    </div>
  );
}