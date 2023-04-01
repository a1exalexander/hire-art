import styled, { css } from "styled-components";

export const AccContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AccItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 32px;
  min-height: 84px;
  @media (max-width: 768px) {
    min-height: 54px;
    padding: 16px;
  }
  ${(props) => css`
      background-color: ${props.theme.colors.white};
      border: 1px solid ${props.theme.colors.N4};
      border-radius: 6px;
    `}
`;

export const AccItemHeader = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const AccItemTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  ${(props) => css`
      color: ${props.theme.colors.H14};
    `}
`;

export const AccItemText = styled.div`
  font-size: 14px;
  line-height: 160%;
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
  justify-content: center;
  transition: all 0.3s ease 0s;
  &::after,
  &::before {
    content: "";
    display: block;
    position: relative;
    height: 12px;
    width: 2px;
    border-radius: 4px;
    transition: all 0.3s ease 0s;
    ${(props) => css`
        background-color: ${props.theme.colors.P4};
      `}
  }
  &::before {
    transform: rotate(90deg) translateY(-1px);
  }
  &::after {
    transform: ${({ onActive }) =>
    onActive
      ? "rotate(90deg) translateY(1px)"
      : "translateX(-1px) translateY(0px);"};
  }
`;
