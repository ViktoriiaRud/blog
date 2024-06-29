import React from 'react';

import {
  StyledImg,
  StyledWrapperCeo,
  StyledWrapperTechnology,
  StyledWrapperTextTechnology,
  StyledWrapperTitle,


} from './technology.styles';

import Container from "../../atoms/container";
import {dataTechnology} from "../../../data/data-six-case-study-page";

const Technology = () => (
  <StyledWrapperTechnology>
    <Container>
      <StyledWrapperTextTechnology>
        <h1>{dataTechnology.subtitle}</h1>
        <h2>{dataTechnology.title}</h2>
        <p>{dataTechnology.description}</p>
      </StyledWrapperTextTechnology>
      <StyledWrapperCeo>
        <StyledWrapperTitle>
          <StyledImg>
            <img src={dataTechnology.srcImage} alt={dataTechnology.altText}/>
          </StyledImg>
          <h2>{dataTechnology.positionCeo}</h2>
          <p> {dataTechnology.descriptionCeo}</p>
          <p> {dataTechnology.titleCeoBold}</p>
          <p> {dataTechnology.descriptionTwoCeo}</p>
      </StyledWrapperTitle>
    </StyledWrapperCeo>
    </Container>
  </StyledWrapperTechnology>
);

export default Technology;
