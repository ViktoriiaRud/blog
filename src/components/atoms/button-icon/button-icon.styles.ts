import styled from 'styled-components';

import { ButtonPropsType } from './button-icon';

export const StyledButtonIcon = styled.a<ButtonPropsType>`
  display: block;
  width: 100%;
  border: none;
  margin: 0 auto;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease;


  ${({ variant }) => {
    switch (variant) {
      case 'black':
        return (
          'background-color: #000000; color: #FFFFFF; ' +
          ' &:hover {background-color: #236DA9; color: #FFFFFF;}'
        );
      case 'black-white':
        return (
          'background-color: #000000; color: #FFFFFF; ' +
          ' &:hover {background-color: #FFFFFF; color: black;}'
        );
      case 'blue':
        return (
          'background-color: #236DA9; color: #FFFFFF;' +
          ' &:hover {background-color: #000000; color: #FFFFFF;}'
        );
      case 'blue-black':
        return (
          'background-color: #236DA9; color: #FFFFFF;' +
          ' &:hover {background-color: #000000; color: #FFFFFF;}'
        );
      case 'transparent':
        return 'background-color: transparent; color: #000000;' + ' &:hover {color: #236DA9;}';
      case 'navigate-gray':
        return (
          'background-color: #E9EAEA; color: #000000; border: 1px solid #000000; border-radius: 20px; ' +
          '&:hover {background-color: #236DA9; color: #FFFFFF; border: 1px solid #E9EAEA;}'
        );
      case 'navigate-blue':
        return 'background-color: #236DA9; color: #FFFFFF; border-radius: 20px;';
      default:
        return '';
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'padding: 8px 15px;';
      case 'md':
        return 'padding: 8px 26px;';
      case 'lg':
        return 'padding: 8px 42px;';
      default:
        return '';
    }
  }}
`;

export const StyledWrapperButtonIcon = styled.div`
  margin: 0 auto;
`;
