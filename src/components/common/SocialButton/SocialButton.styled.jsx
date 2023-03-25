import styled from 'styled-components';
import { SociaIcons } from '../SocialIcons';
import { light } from '../../../styles/theme';



export const StyledButton = styled(SociaIcons)`
  display: block;
  width: 28px;
  height: 28px;
  transition: all 0.2s ease 0s;
  fill: ${light.colors.white};
  @media (any-hover: hover){
    &:hover{
      fill: ${light.colors.Purple2};
    }
  }
`;