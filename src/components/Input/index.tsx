import React, { ChangeEvent } from "react";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  label,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}:
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
