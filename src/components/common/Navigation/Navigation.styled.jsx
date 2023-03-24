import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { light } from "../../../styles/theme";
import { Button } from '../Button/Button';


export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 90vh;
    background: ${light.colors.white};
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100vw)')};
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 30px;
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;

`;

export const JobsArtists = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UserActionBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
  color: ${light.colors.N10};
`;

export const UserMail = styled.p`
  font-weight: 400;
  font-size: 11px;
  color: ${light.colors.N8};
`;

export const Arrow = styled(Icon)`
  cursor: pointer;
  width: 18px;
  height: 18px;
    @media (max-width: 768px) {
    transform: rotate(180deg);
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;
