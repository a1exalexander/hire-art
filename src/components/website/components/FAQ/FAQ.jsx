import PropTypes from 'prop-types';
import { ICON_TYPES } from '../../../common/Icon';
import { Accardion } from '../../../common/Accardion/Accardion';
import {
  AccordionSection,
  AccordionInfo,
  Title,
  Subtitle,
  Link,
  StyledIcon,
  AccordionGroup,
} from './FAQ.styled';
import { Container } from '../../../common/Container';

const accordionData = [
  {
    title: 'Why Hire Art?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.',
  },

  {
    title: 'How much do I need to pay?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna. Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.',
  },

  {
    title: 'How much time does it take to find a job?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna. Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna. Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.',
  },

  {
    title: 'What salary amount is fair?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.',
  },

  {
    title: 'What amount is fair?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.',
  },
];

export function FAQ({ title, description, link }) {
  return (
    <AccordionSection>
      <Container>
        <AccordionInfo>
          <Title>{title}</Title>
          <Subtitle>
            {description}
            <Link href="mailto: help@hireart.com">{link}</Link>
          </Subtitle>
          <StyledIcon name={ICON_TYPES.pen} />
        </AccordionInfo>
        <AccordionGroup>
          {accordionData.map(item => (
            <Accardion key={item.title} title={item.title} content={item.content} />
          ))}
        </AccordionGroup>
      </Container>
    </AccordionSection>
  );
}

FAQ.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
