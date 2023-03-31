import { Container } from '../../../common/Container';
import { Section, Quote, Highlight, Quoter } from './Comment.styled';

export function Comment() {
  return (
    <Section>
      <Container>
        <Quote>
          "Choose a <Highlight>job you love</Highlight>, and you will never have
          to work a day in your life."
        </Quote>
        <Quoter>Winston Churchill</Quoter>
      </Container>
    </Section>
  );
}
