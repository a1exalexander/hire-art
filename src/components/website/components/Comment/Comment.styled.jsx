import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.N2};
  height: 237px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  gap: 16px;
`;

export const Quote = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 145%;
  text-align: center;
  padding: 0px;
  margin: 0px;
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.colors.P5};
`;

export const Quoter = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  color: ${(props) => props.theme.colors.N8};
  margin: 0px;
`;
