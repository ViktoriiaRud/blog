import React from 'react';

import { StyledButton } from './button.styles';

export type ButtonPropsType = {
  href?: string;
  variant?:
    | 'black'
    | 'black-white'
    | 'blue'
    | 'blue-black'
    | 'transparent'
    | 'navigate-gray'
    | 'navigate-blue';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void | React.MouseEventHandler<HTMLButtonElement>;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
const Button: React.FC<ButtonPropsType> = ({
  variant = 'black',
  size = 'sm',
  onClick,
  href,
  children,
}) => (
  <StyledButton variant={variant} size={size} as={onClick ? 'button' : 'a'} href={href}>
    {children}
  </StyledButton>
);

export default Button;
