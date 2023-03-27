import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { light } from "../../../styles/theme";

export const StyledSlideCard = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100%;
  min-height: 470px;
  background: ${light.colors.white};
  border: 1px solid ${light.colors.N4};
  border-radius: 12px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  margin-right: 48px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 170%;
  color: ${light.colors.N10};
`;
export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 170%;
  color: ${light.colors.N8};
  flex-grow: 1;
`;
export const Name = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${light.colors.N10};
`;
export const Position = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${light.colors.N7};
`;
export const Img = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
Description.propTypes = {
  desc: PropTypes.string.isRequired,
};
Name.propTypes = {
  name: PropTypes.string.isRequired,
};
Position.propTypes = {
  pos: PropTypes.string.isRequired,
};
Img.propTypes = {
  img: PropTypes.string.isRequired,
};
