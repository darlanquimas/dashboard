import React, { ButtonHTMLAttributes, CSSProperties } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  customStyle?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, customStyle, ...rest }) => {
  return (
    <div className="flex items-center justify-between">
      <button
        style={customStyle}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        {...rest}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
