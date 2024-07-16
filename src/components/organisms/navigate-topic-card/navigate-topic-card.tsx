import React, { useState } from 'react';

import {dataNavigateTopic, dataNavigateTopicCard} from '../../../data/data-third-page-see-all-case-studiess';
import ButtonIcon from '../../atoms/button-icon';
import Container from '../../atoms/container';

import { StyledWrapperButtonIcon } from '../../atoms/button-icon/button-icon.styles';
import {
  Card,
  CardContainerTopicCard,
  CardFace,
  StyledButtonWidth,
  StyledContentBack,
  StyledContentFront,
  StyledContentText,
  StyledImgTopicCard,
  StyledWrapperIconFront,
  StyledWrapperIconTitle,
  StyledWrapperTopicCard,
  WrapperNavigateTopicCard,
} from './navigate-topic-card.styles';

import NavigateTopic from "../../molecules/navigate-topic";

const NavigateTopicCard = () => {
  const [isShown, setIsShown] = useState<number | null>(null);

  return (
      <WrapperNavigateTopicCard>
        <Container>
          <NavigateTopic {...dataNavigateTopic} />
          <StyledWrapperTopicCard id={'blog-navigate'}>
            <CardContainerTopicCard>
              {dataNavigateTopicCard.navigateTopicCard.cards
                  ? dataNavigateTopicCard.navigateTopicCard.cards.map((card, index) => (
                      <Card key={`${card}`}
                            onMouseEnter={() => setIsShown(index)}
                            onMouseLeave={() => setIsShown(null)}
                      >
                        {isShown !== index && (
                            <CardFace>
                              <StyledContentFront>
                                <StyledWrapperIconTitle>
                                  <StyledContentText>
                                    <h2>{card.title}</h2>
                                    <h3>{card.description}</h3>
                                  </StyledContentText>
                                  <StyledWrapperIconFront>
                                  </StyledWrapperIconFront>
                                </StyledWrapperIconTitle>
                              </StyledContentFront>
                            </CardFace>
                        )}
                        {isShown === index && (
                            <CardFace>
                              <StyledContentBack>
                                <StyledImgTopicCard>
                                  <img src={card.srcImage} alt={card.altText}/>
                                </StyledImgTopicCard>
                                <StyledButtonWidth>
                                  <StyledWrapperButtonIcon>
                                    <ButtonIcon variant="black" size="sm" href={card.hrefButton}>
                                      {card.titleButton}
                                    </ButtonIcon>
                                  </StyledWrapperButtonIcon>
                                </StyledButtonWidth>
                              </StyledContentBack>
                            </CardFace>
                        )}
                      </Card>
                  ))
                  : null}
            </CardContainerTopicCard>
          </StyledWrapperTopicCard>
        </Container>
      </WrapperNavigateTopicCard>
  );
};

export default NavigateTopicCard;