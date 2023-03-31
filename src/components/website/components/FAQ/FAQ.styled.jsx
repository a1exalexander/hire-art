import styled from 'styled-components';
import { Icon } from '../../../common/Icon';

export const AccordionSection = styled.div`
  background-color: ${(props) => props.theme.colors.N2};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  padding-top: 64px;
  padding-bottom: 64px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 132px;
    padding-bottom: 132px;
  }
`;

export const AccordionInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.h2`
  width: 100%;
  max-width: 344px;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: ${(props) => props.theme.colors.N10};
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    max-width: 460px;
    font-size: 40px;
    line-height: 60px;
  }
`;

export const Subtitle = styled.p`
  width: 100%;
  max-width: 230px;
  font-weight: 400;
  font-size: 18px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.N8};
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 215px;
  }
`;

export const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 155%;
  color: ${(props) => props.theme.colors.P5};
`;

export const StyledIcon = styled(Icon)`
  width: 90px;
  height: 80px;
  @media screen and (min-width: 768px) {
    width: 156px;
    height: 140px;
  }
`;

export const AccordionGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;
