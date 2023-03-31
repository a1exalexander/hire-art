import styled from 'styled-components';

export const StyledSocIcon = styled.a`
  cursor: pointer;
  display: inline-block;
  width: 28px;
  height: 28px;
  transition: fill 0.2s ease-in-out;
  &:not(:last-child) {
    margin-right: 18px;
  }
`;
