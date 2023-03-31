import {
  Wrapper,
  SectionTitle,
  Section,
  BestCard,
  BestTitle,
  BestText,
} from './Best.styled';
import img1 from '../../../../assets/svg/best/img_1.svg';
import img2 from '../../../../assets/svg/best/img_2.svg';
import img3 from '../../../../assets/svg/best/img_3.svg';
import { Container } from '../../../common/Container/Container';

export function Best() {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Why We Are The Best</SectionTitle>
        <Section>
          <BestCard>
            <img src={img1} alt="Clear Salary Policy" />
            <BestTitle>Clear Salary Policy</BestTitle>
            <BestText>
              Lorem ipsum dolor sit amet consectetur. Fringilla mauris
              condimentum suscipit sit ut pellentesque amet semper. Lorem ipsum
              dolor sit amet consectet.
            </BestText>
          </BestCard>
          <BestCard>
            <img src={img2} alt="Created by Team of Pros" />
            <BestTitle>Created by Team of Pros</BestTitle>
            <BestText>
              Experience top-notch quality with our service crafted by
              experienced professionals. Trust our unbeatable expertise colleted
              through the years.
            </BestText>
          </BestCard>
          <BestCard>
            <img src={img3} alt="Strong Network" />
            <BestTitle>Strong Network</BestTitle>
            <BestText>
              We built a strong network inside and out of cretive industry
              contacts and connections, giving you access to a wider pool of top
              talent or company.
            </BestText>
          </BestCard>
        </Section>
      </Wrapper>
    </Container>
  );
}
