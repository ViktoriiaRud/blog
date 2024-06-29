import React from 'react';
import Container from '../../atoms/container';

import {
  StyledBlockColorContent,
  StyledBlockSpanOne,
  StyledBlockSpanThree,
  StyledBlockSpanTwo,
  StyledUlBlue,
  StyledUlBlueDark,
  StyledWrapperBlockColor,
  StyledWrapperBlockColorBlue,
  StyledWrapperBlockColorDark,
  StyledWrapperBlockOne,
  StyledWrapperBlocks,
  StyledWrapperBlocksThree,
  StyledWrapperBlocksTwo,
  StyledWrapperProcess,
  StyledWrapperText,
  WrapperProcess,
} from './process.styles';
import {dataProcess} from "../../../data/data-six-case-study-page";
const Process = () => (
  <WrapperProcess>
    <Container>
      <StyledWrapperProcess id={'process'}>
        <h2>{dataProcess.subtitle}</h2>
        <h1>{dataProcess.title}</h1>
        <StyledWrapperBlocks>
          <StyledWrapperBlockOne>
            <StyledBlockSpanOne />
            <StyledWrapperText>
              <h3>{dataProcess.titleChallenge}</h3>
              <h4>{dataProcess.descriptionChallenge}</h4>
            </StyledWrapperText>
            <StyledWrapperBlockColor>
              <StyledBlockColorContent>
                <h3>{dataProcess.titleBlockWhite}</h3>
                <h4>{dataProcess.subTitleBlockWhite}</h4>
              </StyledBlockColorContent>
            </StyledWrapperBlockColor>
          </StyledWrapperBlockOne>
          <StyledWrapperBlocksTwo>
            <StyledBlockSpanTwo />
            <StyledWrapperText>
             <h3>{dataProcess.titleProcess}</h3>
              <h4>{dataProcess.descriptionProcess}</h4>
            </StyledWrapperText>
            <StyledWrapperBlockColorBlue>
              <StyledBlockColorContent>
                <h1>{dataProcess.titleBlockBlue}</h1>
                <StyledUlBlue>
                  <p>{dataProcess.subTitleBlockBlueOne}</p>
                  <p>{dataProcess.subTitleBlockBlueTwo}</p>
                  <p>{dataProcess.subTitleBlockBlueThree}</p>
                  <p>{dataProcess.subTitleBlockBlueFour}</p>
                </StyledUlBlue>
              </StyledBlockColorContent>
            </StyledWrapperBlockColorBlue>
          </StyledWrapperBlocksTwo>
          <StyledWrapperBlocksThree>
            <StyledBlockSpanThree />
            <StyledWrapperText>
              <h3>{dataProcess.titleOutcome}</h3>
              <h4>{dataProcess.descriptionOutcome}</h4>
            </StyledWrapperText>
            <StyledWrapperBlockColorDark>
              <StyledBlockColorContent>
                <h1>{dataProcess.titleBlockBlueDark}</h1>
                <StyledUlBlueDark>
                  <p>{dataProcess.subTitleBlockBlueDarkOne}</p>
                  <p>{dataProcess.subTitleBlockBlueDarkTwo}</p>
                  <p>{dataProcess.subTitleBlockBlueDarkThree}</p>
                </StyledUlBlueDark>
              </StyledBlockColorContent>
            </StyledWrapperBlockColorDark>
          </StyledWrapperBlocksThree>
        </StyledWrapperBlocks>
      </StyledWrapperProcess>
    </Container>
  </WrapperProcess>
);

export default Process;