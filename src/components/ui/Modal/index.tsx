"use client";

import { IconX } from "@tabler/icons-react";
import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-1/3 max-w-md">
        <div className="flex justify-between items-center mb-4">
          {title && <h2 className="text-lg font-semibold text-white">{title}</h2>}
          <button
            onClick={onClose}
            className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <IconX size={20} />
          </button>
        </div>
        <div className="text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
