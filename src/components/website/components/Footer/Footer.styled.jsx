import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section`
  ${(props) => {
    return css`
      background-color: ${props.theme.colors.Purple5};
    `;
  }}
`;

export const Section = styled.section`
  ${(props) => {
    return css`
      display: grid;
      grid-template-columns: 160px 1fr 224px;
      justify-items: center;
      align-items: center;
      width: 100%;
      padding: 36px 0;
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        row-gap: 32px;
      }
    `;
  }}
`;

export const Policy = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    order: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LinkPolicy = styled.a`
  ${(props) => {
    return css`
      font-weight: 400;
      font-size: 12px;
      color: ${props.theme.colors.white};
      transition: all 0.2s ease 0s;
      cursor: pointer;
      text-decoration: none;
      &:not(:last-child) {
        margin-right: 32px;
      }
      &:hover {
        color: ${props.theme.colors.Purple2};
      }
      @media screen and (max-width: 768px) {
        &:not(:last-child) {
          margin-right: 0px;
          margin-bottom: 24px;
        }
      }
    `;
  }}
`;
