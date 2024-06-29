import React from 'react';

import { StyledArrow, WrapperStyledArrow } from './icon-arrow.styles';

export type IconArrowType = {
  href?: string;
  icon?: React.ReactNode;
};

export type IconArrowPropsType = {
  variant?: 'black' | 'blue' | 'transparent' | 'white';

  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void | React.MouseEventHandler<HTMLButtonElement>;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  IconArrowType;
const IconArrow: React.FC<IconArrowPropsType> = ({ variant = 'black', icon, onClick, href }) => (
  <WrapperStyledArrow>
    <StyledArrow variant={variant} onClick={onClick} href={href} as={onClick ? 'button' : 'a'}>
      {icon && <span>{icon}</span>}
    </StyledArrow>
  </WrapperStyledArrow>
);

export default IconArrow;
