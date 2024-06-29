import styled from 'styled-components';

import { breakpoint } from '../../../theme';

export const WrapperProcess = styled.div``;

export const StyledWrapperProcess = styled.div`
  margin: 0 auto;
  max-width: 1010px;

  ${breakpoint.xl} {
    max-width: 1200px;
  }
`;

export const StyledWrapperBlocks = styled.div`
  margin: 65px 20px 0;
  position: relative;

  ${breakpoint.lg} {
    margin: 65px 0 0;
  }
`;

export const StyledBlockSpanOne = styled.span`
  min-height: 236px;
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.black};
  left: 0;
  position: absolute;

  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.bluedark};
    width: 31px;
    height: 31px;
    top: 1px;
    left: -17px;
    transform: rotate(41.5deg) skewX(0deg) scaleY(calc(0.907107));
    border-radius: 1px;
    border: 9px double rgb(248, 248, 248);
  }
`;

export const StyledBlockSpanTwo = styled.span`
  height: 236px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.black};
  left: 0;
  position: absolute;

  &:after {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.blue};
    content: '';
    width: 11px;
    height: 11px;
    top: 15px;
    left: -5px;
    transform: rotate(41.5deg) skewX(0deg) scaleY(calc(0.907107));
  }
`;

export const StyledBlockSpanThree = styled.span`
  height: 236px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.black};
  left: 0;
  position: absolute;

  &:after {
    content: '';
    width: 11px;
    height: 11px;
    top: 15px;
    left: -5px;
    transform: rotate(41.5deg) skewX(0deg) scaleY(calc(0.907107));
    position: absolute;
    background-color: ${({ theme }) => theme.colors.lightblue};
  }
`;

export const StyledWrapperBlockOne = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint.md} {
    flex-direction: row;
    justify-content: end;
  }
`;

export const StyledBlockColorContent = styled.div`
  padding: 40px 36px 30px 40px;
`;

export const StyledWrapperBlocksTwo = styled(StyledWrapperBlockOne)``;
export const StyledWrapperBlocksThree = styled(StyledWrapperBlockOne)``;

export const StyledWrapperText = styled.div`
  max-width: 830px;
  min-height: 249px;
  width: 100%;
  padding: 0 20px 50px 40px;

  ${breakpoint.md} {
    padding: 0 77px 63px 30px;
    width: 70%;
  }

  ${breakpoint.lg} {
    padding: 0 77px 63px 89px;
    max-width: 1122px;
    width: 80%;
  }
`;

export const StyledWrapperBlockColor = styled.div`
  max-width: 536px;
  min-height: 249px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 30px auto;

  ${breakpoint.md} {
    max-width: 236px;
    min-height: 249px;
    margin: 0 auto;
    width: 30%;
  }

  ${breakpoint.lg} {
    width: 20%;
  }
`;

export const StyledWrapperBlockColorBlue = styled(StyledWrapperBlockColor)`
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const StyledWrapperBlockColorDark = styled(StyledWrapperBlockColor)`
  background-color: ${({ theme }) => theme.colors.bluedark};
  margin-bottom: 78px;
`;



export const StyledUlBlue = styled.ul`
  margin-left: 10px;
`;

export const StyledUlBlueDark = styled.ul`
  list-style-type: decimal;
  margin: 10px 0 0 20px;
  color: ${({ theme }) => theme.colors.white};
`;
