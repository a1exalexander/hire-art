import PropTypes from 'prop-types';
import { StyledButton } from './SocialButton.styled';

export const SocialButton = ({ name, fill }) => {
  return (
    <StyledButton name={name} fill={fill}></StyledButton>
  )
}

SocialButton.propTypes = {
  name: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
}

SocialButton.defaultProps = {
  fill: "#FFFFFF",
}
