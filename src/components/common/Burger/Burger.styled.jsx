import styled from "styled-components";
import { light } from "../../../styles/theme";

export const StyledBurger = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 24px;
  right: 16px;
  display: none;
  transition: all 0.3s ease 0s;
  z-index: 50;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    span {
      display: block;
      transition: all 0.3s ease 0s;
      width: 2rem;
      height: 0.2rem;
      background-color: ${({ open }) =>
    open ? light.colors.N4 : light.colors.Purple5};
      border-radius: 10px;
      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg) translate(10px,0px)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
        opacity: ${({ open }) => (open ? 0 : 1)}
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg) translate(13px,-4px)" : "rotate(0)")};
      }
    }
  }
`;
