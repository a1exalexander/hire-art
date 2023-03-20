import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { inlineFlex } from '../../styles/mixins';

export const StyledButton = styled.button`
  cursor: pointer;

  ${inlineFlex('center', 'center')}
  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          background: linear-gradient(82.83deg, #07063d 0%, #31307c 94.75%);
          border-radius: 10px;
          border: none;
          transition: filter 0.2s ease-in-out;
          &:not(:disabled):hover {
            filter: brightness(1.2);
          }
          &:not(:disabled):active {
            filter: brightness(0.9);
          }
          &:disabled {
            cursor: not-allowed;
            background: none;
            background-color: #e7eaee;
            ${StyledText} {
              color: #93a2b7;
            }
          }
          ${StyledText} {
            color: white;
          }
        `;
      case 'secondary':
        return css`
          background-color: white;
          border-radius: 10px;
          border: 1px solid #07063d;
          transition-property: border-color, background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
          &:not(:disabled):hover {
            background-color: #f5f8fe;
            border-color: #1916da;
            ${StyledText} {
              color: #1916da;
            }
          }
          &:not(:disabled):active {
            background-color: #eaecf9;
            border-color: #0e2390;
            ${StyledText} {
              color: #0e2390;
            }
          }

          &:disabled {
            cursor: not-allowed;
            border-color: #93a2b7;
            background-color: #e7eaee;
            ${StyledText} {
              color: #93a2b7;
            }
          }
          ${StyledText} {
            color: #07063d;
          }
        `;
    }
  }}
  ${(props) => {
    switch (props.size) {
      case 'standart':
        return css`
          height: 32px;
          padding: 0 26px;
          ${StyledText} {
            font-size: 12px;
            font-weight: 500;
          }
        `;
      case 'big':
        return css`
          height: 48px;
          min-width: 242px;
          ${StyledText} {
            font-size: 16px;
            font-weight: 500;
          }
        `;
    }
  }}
`;

StyledButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'subtle']),
  size: PropTypes.oneOf(['standart', 'big']),
};

StyledButton.defaultProps = {
  variant: 'primary',
  size: 'standart',
};

export const StyledText = styled.span``;
