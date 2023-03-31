import PropTypes from 'prop-types';
import {
  StyledSlideCard,
  Title,
  Description,
  Name,
  Position,
  Img,
  Wrapper,
  Inner,
} from './SlideCard.styled';

export function SlideCard({ title, desc, name, pos, img }) {
  return (
    <StyledSlideCard>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <Wrapper>
        <Img src={img} alt={name} />
        <Inner>
          <Name>{name}</Name>
          <Position>{pos}</Position>
        </Inner>
      </Wrapper>
    </StyledSlideCard>
  );
}

SlideCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
