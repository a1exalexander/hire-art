import styled from "styled-components";
import PropTypes from "prop-types";

export const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: ${props => props.theme.colors.N10};
  margin-bottom: 64px;
`;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
Title.defaultProps = {
  title: "What Our Customers Say",
};
