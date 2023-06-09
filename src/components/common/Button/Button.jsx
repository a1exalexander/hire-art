import PropTypes from 'prop-types';
import { ICON_TYPES } from '../Icon';
import { StyledButton, StyledIcon, StyledText } from './Button.styled';

export function Button({
  children,
  icon,
  variant,
  isDisabled,
  size,
  onClick,
  iconPosition,
}) {
  return (
    <StyledButton
      disabled={isDisabled}
      onClick={onClick}
      size={size}
      variant={variant}
    >
      {icon && <StyledIcon position={iconPosition} name={icon} />}
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
}

Button.propTypes = {
  ...StyledButton.propTypes,
  children: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  iconPosition: StyledIcon.propTypes.position,
  icon: PropTypes.oneOf(Object.values(ICON_TYPES))
};

Button.defaultProps = {
  ...StyledButton.defaultProps,
  iconPosition: 'left',
};
