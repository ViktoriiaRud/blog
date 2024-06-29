import styled from 'styled-components';

import { breakpoint } from '../../../theme';

export const WrapperAboutClient = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledWrapperAboutClient = styled.div`
  margin: 0 auto;
  min-height: 399px;
  display: flex;
  flex-direction: column;

  ${breakpoint.md} {
    max-width: 1045px;
    flex-direction: row;
    justify-content: space-between;
  }

  ${breakpoint.xl} {
    max-width: 1212px;
  }
`;

export const StyledWrapperTitle = styled.div`
  width: 100%;
  padding: 50px 20px;
  text-align: center;

  ${breakpoint.md} {
    padding: 0;
    margin: 100px 117px 100px 0;
    max-width: 680px;
    width: 70%;
    text-align: start;
  }
`;

export const StyledWrapperContact = styled.div`
  width: 100%;
  text-align: center;
  margin: 50px 0 50px;

  ${breakpoint.md} {
    margin: 120px 0 110px;
    width: 30%;
    text-align: start;
  }
`;
