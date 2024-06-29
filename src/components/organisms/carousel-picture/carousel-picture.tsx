import React from 'react';
import Slider from 'react-slick';
import Container from '../../atoms/container';

import {
  StyledCarouselPicture,
  StyledSliderCarouselPicture,
  StyledWrapperPicture,
  WrapperCarouselPicture,
} from './carousel-picture.styles';

import {CarouselPictureType} from "../../../types/components";

const CarouselPicture = ({carouselPicture}:CarouselPictureType) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <WrapperCarouselPicture>
      <Container>
        <StyledCarouselPicture>
          <StyledSliderCarouselPicture>
            <Slider {...settings}>
              {carouselPicture
                ? carouselPicture.map((item) => (
                      <StyledWrapperPicture key={item.id}>
                        <img src={item.srcImage} alt={item.altText}/>
                      </StyledWrapperPicture>
                  ))
                  : null}
            </Slider>
          </StyledSliderCarouselPicture>
        </StyledCarouselPicture>
      </Container>
    </WrapperCarouselPicture>
  );
};

export default CarouselPicture;