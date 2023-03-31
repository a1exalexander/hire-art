import styled from "styled-components";

export const StyledUserDropDawn = styled.div`
  width: 196px;
  max-height: 400px;
  position: fixed;
  background-color: ${(props) => props.theme.colors.N2};
  border: 1px solid ${(props) => props.theme.colors.N4};
  border-radius: 6px;
  padding-top: 6px;
  z-index: 110;
  margin-top: 20px;
  box-shadow: 0px 19px 49px -23px rgba(211, 211, 211, 1);
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 0px;
    height: 0px;
    border-width: 0px 6px 6px;
    border-style: solid;
    border-color: transparent transparent ${(props) => props.theme.colors.N4};;
    border-image: initial;
    top: -7px;
    left: 18px;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    top: 60px;
    overflow-y: scroll;
    &::before{
      content:'';
      display: none;
    }
  }
`;

export const StyledUl = styled.ul`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  li > button {
    width: 100%;
  }
  li {
    list-style: none;
    &:hover {
      background-color: ${(props) => props.theme.colors.P4};
    }
  }
  li:last-child {
    border-top: 1px solid ${(props) => props.theme.colors.N4};
    margin-top: 8px;
  }
  li > a {
    display: block;
    width: 100%;
    padding: 6px 12px;
    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
    @media (max-width: 768px) {
      font-size: 20px;
      padding: 20px 12px;
    }
  }
  // ? как переназначить стили?
  li > button > svg {
    transform: rotate(270deg);
  }
  @media (max-width: 768px) {
    min-height: 100vh;
    li:last-child {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    button {
      height: 72px;
    }
  }
`;
