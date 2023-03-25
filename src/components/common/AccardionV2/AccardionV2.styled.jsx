import styled from "styled-components";
import { light } from "../../../styles/theme";

export const AccContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AccItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${light.colors.white};
  padding: 32px;
  min-height: 84px;
  background-color:${light.colors.N2};
  border: 1px solid ${light.colors.N4};
  border-radius: 6px;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const AccItemHeader = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
`;

export const AccItemTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${light.colors.H14};

`;

export const AccItemText = styled.div`
  font-size: 14px;
  line-height: 160%;
  color: ${light.colors.H14};
  padding-top: 4px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

export const CloseButton = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content:center;
  transition: all 0.3s ease 0s;
  &::after,
  &::before{
    content: '';
  display: block;
  background-color: ${light.colors.P4};
  position: relative;
  height: 12px;
  width: 2px;
  border-radius: 4px;
  transition: all 0.3s ease 0s;
  }
  &::before{
    transform: rotate(90deg) translateY(-1px)
  }
  &::after{
    transform: ${({ onActive }) => onActive ? 'rotate(90deg) translateY(1px)' : 'translateX(-1px) translateY(0px);'};
  }
`;
