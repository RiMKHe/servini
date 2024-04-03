"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import { CustomButtonProps } from "@types";

const Button = ({ isDisabled, btnType, destinationUrl , containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
  
);
const CustomButton = ({ title, containerStyles, destinationUrl, handleClick }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (destinationUrl) {
      router.push(destinationUrl);
    } else if (handleClick) {
      handleClick();
    }
  };

  return (
    <button 
      className={containerStyles} 
      onClick={handleButtonClick}
    >
      {title}
    </button>
  );
};

export default Button;