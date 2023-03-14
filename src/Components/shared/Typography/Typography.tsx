import React from 'react';
import s from './Typography.module.scss';
import cn from 'classnames';

const VARIANTS = {
  h1: s.h1,
  h2: s.h2,
  h3: s.h3,
  h4: s.h4,
  h5: s.h5,
  h6: s.h6
};

const COLORS = {
  dark: s.darkColor,
  grey: s.greyColor,
  green: s.greenColor
};

type TypographyPropsType = {
  children: React.ReactNode;
  onClick?: () => void;
  color: 'dark' | 'grey' | 'green';
  variant: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
  onMouseMove?: () => void;
  className?: string;
};

const Typography = ({
  children,
  color,
  variant,
  onClick,
  onMouseMove,
  className
}: TypographyPropsType) => {
  return (
    <p
      className={cn(s.typography, VARIANTS[variant], COLORS[color], className)}
      onClick={onClick}
      onMouseMove={onMouseMove}>
      {children}
    </p>
  );
};

export default Typography;
