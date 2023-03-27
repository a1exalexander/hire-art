import { Section, Quote, Highlight, Quoter } from "./Comment.styled";

export const Comment = () => {
  return (
    <Section>
        <Quote>"Choose a <Highlight>job you love</Highlight>, and you will never have to work a day in your life."</Quote>
        <Quoter>Winston Churchill</Quoter>
    </Section>
  );
};
