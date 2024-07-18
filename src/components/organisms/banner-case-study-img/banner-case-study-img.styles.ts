import styled from 'styled-components';
import { breakpoint } from '../../../theme';

export const WrapperBannerCaseStudyImg = styled.div``;

export const StyledWrapperImgCaseStudyImg = styled.div``;
export const StyledTitleButtonCaseStudyImg = styled.div`
  position: absolute;
  padding: 0 20px;
  left: 0;

  ${breakpoint.sm} {
    padding: 0 50px;
  }

  ${breakpoint.md} {
    z-index: 0;
  }

  ${breakpoint.lg} {
    display: block;
    padding: 0;
    max-width: 609px;
    left: 3%;
  }

  ${breakpoint.xl} {
    left: 4%;
  }

  ${breakpoint.xxl} {
    left: 0;
  }
`;

export const StyledWrapperTitleButtonCaseStudy = styled.div``;

export const StyledTitleCaseStudyImgBanner = styled.div`
  &:after {
    background-color: ${({ theme }) => theme.colors.blue};
    left: 3%;
    top: -1px;

    ${breakpoint.sm} {
      left: 4%;
      top: -2px;
    }

    ${breakpoint.md} {
      left: 12%;
      top: 0;
    }

    ${breakpoint.lg} {
      left: -1%;
    }
  }
`;
