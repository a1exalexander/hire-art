import PropTypes from 'prop-types';
import { StyledBurger } from './Burger.styled';

export function Burger({ onClick, isOpen }) {
  return (
    <StyledBurger open={isOpen} onClick={onClick}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
