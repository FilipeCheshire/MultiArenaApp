import React from "react";

interface ModalErrorProps {
  message: string;
  onClose: () => void;
}

export default function ModalError({ message, onClose }: ModalErrorProps) {
  return (
    <div
      className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white border border-red-500 text-red-700 px-6 py-4 rounded-lg shadow-md max-w-xs w-[90vw] z-50"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex justify-between items-center">
        <p className="text-sm">{message}</p>
        <button
          onClick={onClose}
          aria-label="Fechar mensagem de erro"
          className="ml-4 text-red-700 hover:text-red-900 focus:outline-none"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
}
