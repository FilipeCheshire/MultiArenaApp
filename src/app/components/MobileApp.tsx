/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import HomeScreen from "./HomeScreen";
import AccountScreen from "./AccountScreen";
import Esportes from "./Esportes";
import Desafios from "./Desafios";
import Configuracoes from "./Config";
import BottomMenu from "./BottomMenu";

export default function MobileApp() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState("home");

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // Login com verificação de email
  const handleLogin = async (e: React.FormEvent<HTMLFormElement> | null) => {
  if (e) e.preventDefault();

  try {
    const { signInWithEmailAndPassword } = await import("firebase/auth");
    const { auth } = await import("../../../lib/firebase");

    await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
    setIsLoggedIn(true);
    setActiveScreen("home");
  } catch (error: any) {
    alert("Erro ao fazer login: " + error.message);
  }
};

  // Registro com envio de email de verificação
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const {
        createUserWithEmailAndPassword,
        updateProfile,
        sendEmailVerification,
      } = await import("firebase/auth");
      const { auth } = await import("../../../lib/firebase");

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerData.email,
        registerData.password
      );

      await updateProfile(userCredential.user, {
        displayName: `${registerData.firstName} ${registerData.lastName}`,
      });

      await sendEmailVerification(userCredential.user);

      alert("Registro realizado com sucesso! Verifique seu e-mail para confirmar a conta.");
      setIsRegistering(false);
      setLoginData({ email: registerData.email, password: registerData.password });
    } catch (error: any) {
      alert("Erro ao registrar: " + error.message);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      const { signOut } = await import("firebase/auth");
      const { auth } = await import("../../../lib/firebase");

      await signOut(auth);
      setIsLoggedIn(false);
      setActiveScreen("login");
      setLoginData({ email: "", password: "" });
      setRegisterData({ email: "", password: "", firstName: "", lastName: "" });
    } catch (error: any) {
      alert("Erro ao sair: " + error.message);
    }
  };

  // Renderiza a tela correta
  const renderScreen = () => {
    if (!isLoggedIn) {
      return isRegistering ? (
        <RegisterForm
          registerData={registerData}
          setRegisterData={setRegisterData}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onSubmit={handleRegister}
          toggleMode={() => setIsRegistering(false)}
        />
      ) : (
        <LoginForm
          loginData={loginData}
          setLoginData={setLoginData}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onSubmit={handleLogin}
          toggleMode={() => setIsRegistering(true)}
        />
      );
    }

    switch (activeScreen) {
      case "home":
        return <HomeScreen />;
      case "account":
        return <AccountScreen onLogout={handleLogout} />;
      case "esportes":
        return <Esportes />;
      case "desafios":
        return <Desafios />;
      case "configuracoes":
        return <Configuracoes />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <>
      {renderScreen()}
      {isLoggedIn && (
        <BottomMenu activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      )}
    </>
  );
}
