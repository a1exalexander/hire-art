import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 666px;
`;

export const SectionTitle = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  color: #0f1723;
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    margin: 64px 0px 40px 0px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;
  margin-left: 90px;
  margin-right: 90px;
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 0 16px;
    gap: 32px;
    flex-direction: column;
  }
`;

export const BestCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  & img {
    width: 80px;
    height: 80px;
  }
`;
export const BestTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #0f1723;
  margin: 0px;
`;

export const BestText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
  color: #4b5565;
  margin: 0px;
`;
