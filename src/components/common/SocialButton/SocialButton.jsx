import PropTypes from 'prop-types';
import { StyledButton } from './SocialButton.styled';

export function SocialButton({ name, fill }) {
  return <StyledButton name={name} fill={fill} />;
}

SocialButton.propTypes = {
  name: PropTypes.string.isRequired,
  fill: PropTypes.string,
};
