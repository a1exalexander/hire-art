import styled from 'styled-components';

export const StyledSlideCard = styled.div`
  max-width: 440px;
  height: 100%;
  min-height: 470px;
  width: 343px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.N4};
  border-radius: 12px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  margin-right: 48px;
  @media (min-width: 767px) {
    padding: 40px;
    width: 100%;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 170%;
  color: ${props => props.theme.colors.N10};
`;
export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 170%;
  color: ${props => props.theme.colors.N8};
  flex-grow: 1;
`;
export const Name = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.N10};
`;
export const Position = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${props => props.theme.colors.N7};
`;
export const Img = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;
