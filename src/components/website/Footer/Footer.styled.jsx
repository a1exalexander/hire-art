import styled from "styled-components";
import { light } from "../../../styles/theme";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 160px 1fr 224px;
  justify-items: center;
  align-items: center;
  width: 100%;
  background-color: ${light.colors.Purple5}; 
  padding: 36px 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
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
  font-weight: 400;
  font-size: 12px;
  color: ${light.colors.white};
  cursor: pointer;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 32px;
  }
  &:hover {
    color:${light.colors.Purple2};
  }
  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 24px;
    }
  }
`;




