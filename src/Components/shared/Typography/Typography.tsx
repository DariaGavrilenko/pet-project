import React from 'react';
import s from './Typography.module.css';

type TypographyPropsType = {
  children: React.ReactNode;
};

const Typography = ({ children }: TypographyPropsType) => {
  return <p className={s.typography}>{children}</p>;
};

export default Typography;
