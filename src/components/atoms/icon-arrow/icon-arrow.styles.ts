import styled from 'styled-components';

import { IconArrowPropsType } from './icon-arrow';

export const WrapperStyledArrow = styled.div`
  display: block;
  position: relative;
  left: 0;
  top: 0;
`;

export const StyledArrow = styled.a<IconArrowPropsType>`
  position: absolute;
  content: ' ';
  display: flex;
  justify-content: center;
  width: 35px;
  height: 36px;
  cursor: pointer;
  z-index: 3;
  align-items: center;

  ${({ variant }) => {
    switch (variant) {
      case 'black':
        return 'background-color: black;';
      case 'blue':
        return 'background-color: #236DA9';
      case 'transparent':
        return 'background-color: transparent;';
      case 'white':
        return 'background-color: white;';
      default:
        return '';
    }
  }}
`;
