import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { SociaIcons } from '../SocialIcons';

export const StyledButton = styled(SociaIcons)`
  ${props => css`
    display: block;
    width: 28px;
    height: 28px;
    transition: all 0.2s ease 0s;
    fill: ${props.fill || props.theme.colors.white};
    @media (any-hover: hover) {
      &:hover {
        fill: ${props.theme.colors.Purple2};
      }
    }
  `}
`;

StyledButton.propTypes = {
  fill: PropTypes.string,
};
