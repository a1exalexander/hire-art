import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CustomersSayStyled = styled.div`
  padding-top: 64px;
  padding-bottom: 48px;
  padding-left: 16px;
  @media (min-width: 767px) {
    padding-left: 48px;
    padding-top: 120px;
    padding-bottom: 80px;
  }
  @media (min-width: 1366px) {
    padding-left: calc(100% - (50% + 665px));
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  text-align: left;
  width: 300px;
  color: ${props => props.theme.colors.N10};
  margin-bottom: 40px;
  @media (min-width: 767px) {
    width: 100%;
    margin-bottom: 64px;
    font-size: 40px;
    text-align: center;
  }
`;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
Title.defaultProps = {
  title: 'What Our Customers Say',
};
