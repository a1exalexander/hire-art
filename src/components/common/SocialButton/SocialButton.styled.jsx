import styled, { css } from "styled-components";
import { SociaIcons } from "../SocialIcons";

export const StyledButton = styled(SociaIcons)`
  ${(props) => {
    return css`
      display: block;
      width: 28px;
      height: 28px;
      transition: all 0.2s ease 0s;
      fill: ${props.theme.colors.white};
      @media (any-hover: hover) {
        &:hover {
          fill: ${props.theme.colors.Purple2};
        }
      }
    `;
  }}
`;
