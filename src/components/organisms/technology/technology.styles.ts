import styled from 'styled-components';

import { breakpoint } from '../../../theme';


export const StyledWrapperTechnology = styled.div``;


export const StyledWrapperTextTechnology = styled.div`
  margin: 0 auto;
  text-align: center;
  display: block;

  ${breakpoint.md} {
    max-width: 850px;
  }

  ${breakpoint.lg} {
    max-width: 980px;
  }
`;



export const StyledWrapperTitle = styled.div`
  margin: 60px 0 80px;
  width: 100%;
  padding: 20px;
  max-width: 440px;

  ${breakpoint.lg} {
    max-width: 440px;
    margin: 86px 0 113px;
    padding: 0;
  }
`;

export const StyledWrapperCeo = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 440px;
`;

export const StyledImg = styled.div`
  position: absolute;
  width: 87px;
  height: 87px;
  display: block;
  top: 8%;
  left: 59%;

  ${breakpoint.sm} {
    top: -7%;
    left: 76%;
  }

  ${breakpoint.md} {
    top: -4%;
  }

  ${breakpoint.lg} {
    top: -19%;
    left: 79%;
  }
`;
