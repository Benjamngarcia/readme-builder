import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  color?: "blue" | "gray" | "red" | "green";
  variant?: "colored" | "outlined";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  color = "blue",
  variant = "colored",
  size = "medium",
  icon,
}) => {
  const baseStyles = "flex items-center justify-center rounded-md focus:outline-none focus:ring-2";
  const colorStyles = {
    blue: variant === "colored" ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    gray: variant === "colored" ? "bg-gray-500 text-white hover:bg-gray-600" : "border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white",
    red: variant === "colored" ? "bg-red-600 text-white hover:bg-red-700" : "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    green: variant === "colored" ? "bg-green-600 text-white hover:bg-green-700" : "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
  };

  const sizeStyles = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-md",
    large: "py-3 px-6 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${colorStyles[color]} ${sizeStyles[size]} ${icon ? "space-x-2" : ""}`}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
