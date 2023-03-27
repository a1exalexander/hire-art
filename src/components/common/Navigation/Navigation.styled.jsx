import styled, { css } from 'styled-components';
import { Icon } from '../Icon';
import { light } from '../../../styles/theme';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(-100vw)'};
    position: absolute;
    align-items: flex-start;
    justify-content: flex-start;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    width: 100%;
    padding-top: ${({ login }) => (login ? '80px' : '60px')};
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
  @media (max-width: 768px) {
    align-self: center;
    position: fixed;
    bottom: 24px;
  }
  @media (max-width: 640px) {
    align-self: center;
    flex-direction: column;
    gap: 12px;
    position: fixed;
    bottom: 24px;
  }
`;

export const JobsArtists = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const Wrapper = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 60px;
    top: 0;
    right: 0;
    left: 0;
    &::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: -1;
      ${(props) => {
        return css`
          background-color: ${props.theme.colors.Purple1};
        `;
      }}
    }
  }
`;

export const UserActionBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    order: -1;
    position: fixed;
    top: 6px;
    left: 15px;
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
  @media (any-hover: hover) {
    &:hover {
      transform: rotate(-180deg);
    }
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;
