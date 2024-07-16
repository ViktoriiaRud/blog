import styled from 'styled-components';

export const WrapperNavigateTopicCard = styled.div`
  width: 100%;
  height: 100%;
`;
export const StyledWrapperTopicCard = styled.div`
  max-width: 1256px;
  margin: 52px auto;

`;

export const CardContainerTopicCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
`;

export const Card = styled.div`
  max-width: 295px;
  min-height: 295px;
  width: 100%;
  height: 100%;
`;

export const CardFace = styled.div``;

export const StyledContentFront = styled.div`
    padding: 35px 30px 60px 30px;
    background-color: cadetblue;
    max-width: 295px;
    height: 200px;
    border-radius: 4px;
    
    h2 {
        color: white;
        font-size: 26px;
    }
    
    h3 {
        color: white;
        font-size: 18px;
    }
`;

export const StyledContentBack = styled.div`
  max-width: 295px;
  min-height: 295px;
  width: 100%;
  height: 100%;
`;

export const StyledContentText = styled.div`
`;

export const StyledWrapperIconFront = styled.div``;

export const StyledImgTopicCard = styled.div`
  max-width: 295px;
  min-height: 258px;
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 295px;
    min-height: 256px;
    object-fit: cover;
    position: absolute;
    height: 100%;
    top: 0;
  }
`;

export const StyledButtonWidth = styled.div`
    width: 265px;
`;

export const StyledWrapperIconTitle = styled.div`
  display: flex;
  gap: 21px;
`;