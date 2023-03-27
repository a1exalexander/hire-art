import styled, { css } from 'styled-components';

export const StyledAccordion = styled.div`
    max-width: 770px;
    width: 100%;
    height: 100%
    min-height: 139px;
    background: #FFFFFF;
    border: 1px solid #C2CADF;
    border-radius: 6px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    @media screen and (max-width: 768px) {
        max-width: 343px;
        min-heigh: 154px;
        padding: 16px;
    }
`;

export const AccordionTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const AccordionTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #0F1723;
    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 167%;
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
    color: #0F1723;
`;
