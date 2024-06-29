import styled from 'styled-components';

import { breakpoint } from '../../../theme';

export const WrapperCarouselPicture = styled.div`
  width: 100%;
  margin-top: -33px;
`;

export const StyledCarouselPicture = styled.div`
  display: block;
  margin: 0 auto;

  ${breakpoint.sm} {
    max-width: 620px;
  }

  ${breakpoint.md} {
    max-width: 750px;
  }

  ${breakpoint.lg} {
    max-width: 1213px;
  }

  img {
    width: 100%;
    height: 499px;
    border-radius: 20px;
    object-fit: cover;  

    ${breakpoint.sm} {
      width: 620px;
    }

    ${breakpoint.md} {
      width: 750px;
    }

    ${breakpoint.lg} {
      width: 1213px;
    }
  }
`;

export const StyledWrapperPicture = styled.div``;

export const StyledSliderCarouselPicture = styled.div`
  .slick-dots {
    left: 0;
    top: 91%;

    ${breakpoint.md} {
      top: 89%;
      left: 0;
    }

    ${breakpoint.lg} {
      left: 86%;
      top: 91%;
    }

    ${breakpoint.xl} {
      left: 86%;
    }

    ${breakpoint.xxl} {
      left: 86%;
    }
  }

  .slick-prev {
    ${breakpoint.md} {
      top: 90%;
      left: 40%;
    }

    ${breakpoint.lg} {
      top: 92%;
      left: 82%;
    }

    ${breakpoint.xl} {
      left: 83%;
    }
  }

  .slick-next {
    ${breakpoint.md} {
      top: 90%;
      right: 40%;
    }

    ${breakpoint.lg} {
      top: 92%;
      right: 0;
    }
  }
`;
