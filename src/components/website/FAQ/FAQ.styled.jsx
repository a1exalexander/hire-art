import styled, { css } from 'styled-components';

export const AccordionSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    background: #F3F5F8;
    padding: 132px 48px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 64px 16px;
    }
`

export const AccordionInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Title = styled.h2`
    width: 100%;
    max-width: 460px;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
    text-align: flex-start;
    color: #0F1723;
    margin-bottom: 24px;
    @media screen and (max-width: 768px) {
        max-width: 344px;
        font-size: 32px;
        line-height: 48px;
        color: #0F1723;
    }
`

export const Subtitle = styled.p`
    width: 100%;
    max-width: 230px;
    font-weight: 400;
    font-size: 18px;
    line-height: 155%;
    text-align: flex-start;
    color: #4B5565;
    margin-bottom: 215px;
    @media screen and (max-width: 768px) {
        margin-bottom: 40px;
    }
`

export const Link = styled.a`
    font-weight: 400;
    font-size: 18px;
    line-height: 155%;
    color: #1916DA;
`
export const IconWrapper = styled.span`
    width: 156px;
    height: 140px;
    @media screen and (max-width: 768px) {
        width: 90px;
        height: 80px;
    }
`
export const AccordionGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
`