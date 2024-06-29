import React from 'react';

import ButtonIcon from '../../atoms/button-icon';

import { StyledWrapperButtonIcon } from '../../atoms/button-icon/button-icon.styles';
import {
  StyledWrapperButton,
  StyledWrapperButtonNavigate,
  WrapperNavigateTopic,
} from './navigate-topic.styles';
import {dataNavigateTopic} from "../../../data/data-third-page-see-all-case-studiess";



const NavigateTopic = () => (
  <WrapperNavigateTopic>
    <h3>{dataNavigateTopic.subtitle}</h3>
    <StyledWrapperButton>
      <StyledWrapperButtonNavigate>
        <StyledWrapperButtonIcon>
          <ButtonIcon variant="navigate-gray" size="sm" href={dataNavigateTopic.hrefButtonNavOne}>
            {dataNavigateTopic.buttonNavOne}
          </ButtonIcon>
        </StyledWrapperButtonIcon>
      </StyledWrapperButtonNavigate>

      <StyledWrapperButtonNavigate>
        <StyledWrapperButtonIcon>
          <ButtonIcon variant="navigate-gray" size="sm" href={dataNavigateTopic.hrefButtonNavTwo}>
            {dataNavigateTopic.buttonNavTwo}
          </ButtonIcon>
        </StyledWrapperButtonIcon>
      </StyledWrapperButtonNavigate>

      <StyledWrapperButtonNavigate>
        <StyledWrapperButtonIcon>
          <ButtonIcon variant="navigate-gray" size="sm" href={dataNavigateTopic.hrefButtonNavThird}>
            {dataNavigateTopic.buttonNavThird}
          </ButtonIcon>
        </StyledWrapperButtonIcon>
      </StyledWrapperButtonNavigate>

      <StyledWrapperButtonNavigate>
        <StyledWrapperButtonIcon>
          <ButtonIcon variant="navigate-gray" size="sm" href={dataNavigateTopic.hrefButtonNavFour}>
            {dataNavigateTopic.buttonNavFour}
          </ButtonIcon>
        </StyledWrapperButtonIcon>
      </StyledWrapperButtonNavigate>
    </StyledWrapperButton>
  </WrapperNavigateTopic>
);

export default NavigateTopic;
