import PropTypes from 'prop-types';
import { StyledButton, StyledText } from './Button.styled';

export const Button = ({
  children,
  variant,
  disabled,
  isDisabled,
  size,
  onClick,
}) => {
  return (
    <StyledButton
      disabled={isDisabled}
      onClick={onClick}
      size={size}
      variant={variant}
    >
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  ...StyledButton.propTypes,
};

Button.defaultProps = {
  ...StyledButton.defaultProps,
};
