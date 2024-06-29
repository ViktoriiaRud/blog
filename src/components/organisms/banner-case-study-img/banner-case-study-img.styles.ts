import styled from 'styled-components';
import FbfImage from "../../atoms/fbf-image";
import Typography from '../../atoms/typography';

import { breakpoint } from '../../../theme';


import {
  StyledSubTitleInnovation,
  StyledTitleButtonInnovation,
  StyledTitleInnovationBanner,
  StyledWrapperTitleButtonInnovation,
  TypographyInnovationDescription,
  TypographyInnovationTitle,
  WrapperBannerInnovation,
} from '../banner-innovation/banner-innovation.styles';

export const WrapperBannerCaseStudyImg = styled(WrapperBannerInnovation)``;

export const StyledWrapperImgCaseStudyImg = styled.div``;

// export const StyledImage = styled(FbfImage)`
//   position: relative;
//   margin: 0 auto;
//   min-height: 1100px;
//   z-index: -6;
//   object-fit: cover;
//
//   ${breakpoint.xxl} {
//     min-height: unset;
//     max-height: 675px;
//   }
// `;

export const StyledTitleButtonCaseStudyImg = styled(StyledTitleButtonInnovation)`
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

export const StyledWrapperTitleButtonCaseStudy = styled(StyledWrapperTitleButtonInnovation)``;

export const StyledTitleCaseStudyImgBanner = styled(StyledTitleInnovationBanner)`
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

export const TypographyCaseStudyImgTitle = styled(TypographyInnovationTitle)``;

export const TypographyCaseStudyImgDescription = styled(TypographyInnovationDescription)`
  padding: 0 30px;

  ${breakpoint.sm} {
    padding: 0 50px;
  }

  ${breakpoint.md} {
    padding: 0;
  }
`;

// export const StyledSubTitleCaseStudyImg = styled(StyledSubTitleInnovation)``;


export const StyledTypography = styled(Typography)`
  font-family: ${({ theme }) => theme.font2};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const VerticalStyledWrapper = styled.div`
  ${breakpoint.md} {
    max-width: 220px;
    width: 100%;
    position: absolute;
    left: 86%;
    top: 207px;
    z-index: 22;
    transform: rotate(90deg);
  }

  ${breakpoint.lg} {
    left: 120%;
  }

  ${breakpoint.xl} {
    left: 158%;
  }

  ${breakpoint.xxl} {
    left: 180%;
  }
`;

export const WrapperStyledLinkCaseStudyImg = styled(WrapperStyledLink)``;

export const StyledWrapperButtonWidthTwo = styled.div`
  margin: 35px 0 7px -14px;
`;