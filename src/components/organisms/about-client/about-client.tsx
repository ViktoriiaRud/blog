import React from 'react';
import Container from '../../atoms/container';

import {
  StyledWrapperAboutClient,
  StyledWrapperContact,
  StyledWrapperTitle,
  WrapperAboutClient,
} from './about-client.styles';

import {dataAboutClient} from "../../../data/data-six-case-study-page";
const AboutClient = () => (
  <WrapperAboutClient>
    <Container>
      <StyledWrapperAboutClient>
        <StyledWrapperTitle>
          <h2>{dataAboutClient.subtitle}</h2>
          <h1>{dataAboutClient.title}</h1>
          <p>{dataAboutClient.description}</p>
        </StyledWrapperTitle>
        <StyledWrapperContact>
          <p>{dataAboutClient.subtitleCountry}</p>
          <p>{dataAboutClient.titleCountry}</p>
          <p>{dataAboutClient.subtitleYear}</p>
          <p>{dataAboutClient.titleYear}</p>
          <p>{dataAboutClient.subtitleIndustry}</p>
          <p>{dataAboutClient.titleIndustry}</p>
        </StyledWrapperContact>
      </StyledWrapperAboutClient>
    </Container>
  </WrapperAboutClient>
);

export default AboutClient;