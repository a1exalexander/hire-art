import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export const FixedContainer = styled.div`
  width: 100%;
  padding: 23px 0px;
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  height: 80px;
  transition: height 0.2s ease, background-color 0.2s ease, padding 0.2s ease;
  &.scroll {
    padding: 14px 0px;
    height: 60px;
    background-color: ${(props) => props.theme.colors.P3};
    border-radius: 0 0 6px 6px;
  }
  @media (max-width: 768px) {
    height: 72px;
    z-index: 2;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: none;
  @media (max-width: 768px) {
    display: block;
    z-index: 2;
  }
`;

export const LogoContainerMob = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledNav = styled.div`
  max-width: 1270px; //conatiner не работает
  display: grid;
  grid-template-columns: 240px 1fr 266px;
  align-items: center;
  margin: 0 auto;
  padding-right: 16px;
  padding-left: 16px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
    transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100vw)"};
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    width: 100%;
    padding-top: ${({ isLogin }) => (isLogin ? "80px" : "60px")};
    padding-bottom: 30px;
    ${(props) => {
    return css`
        background: ${props.theme.colors.white};
      `;
  }}
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  @media (max-width: 768px) {
    align-self: center;
    position: fixed;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.P3};
    padding: 8px 16px;
    min-width: 100%;
    border-radius: 10px 10px 0 0;
  }
  button {
    @media (max-width: 768px) {
      flex: 50%;
      min-height: 44px;
    }
  }
`;

export const JobsArtists = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding-top: 24px;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.colors.N3};
    a {
      font-size: 20px;
      width: 100%;
    }
    a:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;


export const Wrapper = styled.div`
  position: absolute;
  right: 16px;
  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 72px;
    top: 0;
    right: 0;
    left: 0;
    &::before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 100;
      ${(props) => {
    return css`
          background-color: ${props.theme.colors.Purple1};
        `;
  }}
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const UserName = styled.p`
  font-weight: 400;
  font-size: 16px;
  ${(props) => {
    return css`
      color: ${props.theme.colors.N10};
    `;
  }}
`;

export const UserMail = styled.p`
  font-weight: 400;
  font-size: 11px;
  ${(props) => {
    return css`
      color: ${props.theme.colors.N8};
    `;
  }}
`;

export const Arrow = styled(Icon)`
  cursor: pointer;
  width: 18px;
  height: 18px;
  transition: all 0.3s ease 0s;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserActionBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  ${props => props.isDropDawnOpen && css`
    ${Avatar} {
      border-radius: 50%;
      box-shadow: 0 0 0 2px ${props => props.theme.colors.P5};
    }
    ${Arrow} {
      transform: rotate(180deg);
    }
  `}
  @media (max-width: 768px) {
    order: -1;
    position: fixed;
    top: 12px;
    left: 15px;
    z-index: 102;
  }
`;

