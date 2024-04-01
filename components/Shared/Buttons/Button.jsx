"use client";

const defaultBtnClass =
  "flex justify-center items-center gap-1 px-4 py-2 rounded-full font-medium text-center";

const variants = {
  red: `${defaultBtnClass} bg-red-700 text-white`,
  white: `${defaultBtnClass} bg-white text-gray-800`,
  black: `${defaultBtnClass} bg-gray-900 text-gray-200`,
};

export default function Button({
  variant,
  children,
  extraClassName = "",
  onClick = () => {},
  ...restProps
}) {
  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${extraClassName}`}
      {...restProps}
    >
      {children}
    </button>
  );
}
