"use client";

import { FC } from "react";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  id?: string;
}

const TextInput: FC<TextInputProps> = ({ value, onChange, placeholder, label, id }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-300">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
