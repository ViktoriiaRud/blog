import React from 'react';

import { StyledButtonIcon } from './button-icon.styles';

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
const ButtonIcon: React.FC<ButtonPropsType> = ({
  variant = 'black',
  size = 'sm',
  onClick,
  href,
  children,
}) => (
  <StyledButtonIcon variant={variant} size={size} as={onClick ? 'button' : 'a'} href={href}>
    {children}
  </StyledButtonIcon>
);

export default ButtonIcon;
