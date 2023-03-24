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
