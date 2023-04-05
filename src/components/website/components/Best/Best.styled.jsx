import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 666px; 
`;

export const SectionTitle = styled.h1`
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    color: #0F1723;
    margin: 64px 0 40px 0;
    @media screen and (min-width: 768px) {
        margin: 143px 0 80px 0;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 16px;
    gap: 32px;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 80px;
        margin-left: 90px;
        margin-right: 90px;
    }
`;

export const BestCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    color: #0F1723;
`;

export const BestText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 155%;
    color: #4B5565;
`;
