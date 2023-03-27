import PropTypes from "prop-types";
import {
  StyledSlideCard,
  Title,
  Description,
  Name,
  Position,
  Img,
  Wrapper,
  Inner,
} from "./SlideCard.styled";

import photo_1 from "../Slider/SliderImg/photo_1.svg";

export const SlideCard = ({ title, desc, name, pos, img }) => {
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
};

SlideCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

SlideCard.defaultProps = {
  title: "The best ones!",
  name: "Cory Delmeir",
  desc: "I was using a couple of services, but only HireArt really helped… They have great features like intuitive UI, ease of use /UX and great customer service agents like Anna, who helped through the process. I will recommend it to my friends.  Give this service a chance!",
  img: photo_1,
  pos: "Frontend developer",
};
