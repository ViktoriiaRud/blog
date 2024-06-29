import React from 'react';

import Container from '../../atoms/container';
import {
  StyledTitleButtonCaseStudyImg,
  StyledTitleCaseStudyImgBanner,
  StyledWrapperImgCaseStudyImg,
  WrapperBannerCaseStudyImg,
  StyledWrapperTitleButtonCaseStudy,
} from './banner-case-study-img.styles';

import {dataBannerCaseStudyImg} from "../../../data/data-six-case-study-page";
const BannerCaseStudyImg = () => (
  <WrapperBannerCaseStudyImg>
    <StyledWrapperImgCaseStudyImg>
      <img src="" alt=""/>
    </StyledWrapperImgCaseStudyImg>
    <Container>
      <StyledWrapperTitleButtonCaseStudy>
      <StyledTitleButtonCaseStudyImg>
        <h2>{dataBannerCaseStudyImg.subtitle}</h2>
        <StyledTitleCaseStudyImgBanner>
          <h1>{dataBannerCaseStudyImg.title}</h1>
        </StyledTitleCaseStudyImgBanner>
        <p>{dataBannerCaseStudyImg.description}</p>
      </StyledTitleButtonCaseStudyImg>
      </StyledWrapperTitleButtonCaseStudy>
    </Container>
  </WrapperBannerCaseStudyImg>
);

export default BannerCaseStudyImg;