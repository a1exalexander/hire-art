import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { light } from "../../../styles/theme";

export const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: ${light.colors.N10};
  margin-button: 64px;
`;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
Title.defaultProps = {
  title: "What Our Customers Say",
};
