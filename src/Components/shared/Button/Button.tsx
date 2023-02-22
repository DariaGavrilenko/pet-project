import React from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
  children: React.ReactNode;
  color: string;
  onClickHandler: () => void;
};

const Button = ({ children, color, onClickHandler }: ButtonPropsType) => {
  return (
    <button
      className={color === 'blue' ? s.headerButtonBlue : s.headerButton}
      onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
