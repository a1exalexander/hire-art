import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled.jsx';

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.ptopTypes = {
  children: PropTypes.node.isRequired,
};
