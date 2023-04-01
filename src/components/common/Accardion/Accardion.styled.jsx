import styled from 'styled-components';

export const StyledAccordion = styled.div`
  max-width: 344px;
  width: 100%;
  min-heigh: 154px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.N4};
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  @media screen and (min-width: 768px) {
    max-width: 770px;
    min-height: 84px;
    padding: 32px;
  }
`;

export const AccordionTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const AccordionTitle = styled.div`
  align-self: flex-start;
  font-weight: 500;
  font-size: 18px;
  line-height: 167%;
  color: ${(props) => props.theme.colors.N10};
  @media screen and (mix-width: 768px) {
    font-size: 20px;
    line-height: 150%;
  }
`;

export const AccordionImage = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccordionContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: ${(props) => props.theme.colors.N10};
`;
