import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Logo } from "../../common/Logo/Logo";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 160px 1fr 224px;
  justify-items: center;
  align-items: center;
  width: 100%;
  /* background-color: ${(props) => props.theme.Purple5}; */ //! НЕ РАБОТАЕТ
  background-color: #07063d;
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
  font-family: "Poppins";
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 32px;
  }
  &:hover {
    color: #afa8a8;
  }
  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 24px;
    }
  }
`;


