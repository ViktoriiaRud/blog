import React from 'react';
import Button from '../../atoms/button';
import {
  StyledWrapperButton,
  StyledWrapperButtonNavigate,
  WrapperNavigateTopic,
} from './navigate-topic.styles';
import {dataNavigateTopic} from "../../../data/data-third-page-see-all-case-studiess";
import Container from "../../atoms/container";


const NavigateTopic = () => (
    <Container>
      <WrapperNavigateTopic>
        <h3>{dataNavigateTopic.subtitle}</h3>
        <StyledWrapperButton>
          <StyledWrapperButtonNavigate>
            <StyledWrapperButton>
              <Button variant="navigate-gray" size="sm" href={dataNavigateTopic.hrefButtonNavOne}>
                {dataNavigateTopic.buttonNavOne}
              </Button>
            </StyledWrapperButton>
          </StyledWrapperButtonNavigate>

          <StyledWrapperButtonNavigate>
            <StyledWrapperButton>
              <Button variant="navigate-gray" size="sm" href={dataNavigateTopic.hrefButtonNavTwo}>
                {dataNavigateTopic.buttonNavTwo}
              </Button>
            </StyledWrapperButton>
          </StyledWrapperButtonNavigate>

          <StyledWrapperButtonNavigate>
            <StyledWrapperButton>
              <Button variant="navigate-gray" size="sm" href={dataNavigateTopic.hrefButtonNavThird}>
                {dataNavigateTopic.buttonNavThird}
              </Button>
            </StyledWrapperButton>
          </StyledWrapperButtonNavigate>

          <StyledWrapperButtonNavigate>
            <StyledWrapperButton>
              <Button variant="navigate-gray" size="sm" href={dataNavigateTopic.hrefButtonNavFour}>
                {dataNavigateTopic.buttonNavFour}
              </Button>
            </StyledWrapperButton>
          </StyledWrapperButtonNavigate>
        </StyledWrapperButton>
      </WrapperNavigateTopic>
    </Container>
);

export default NavigateTopic;
