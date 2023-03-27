import PropTypes from 'prop-types';
import { Accardion } from '../../common/Accardion/Accardion';
import { IconPen} from '../../common/Icon/Icon'
import {
  AccordionSection,
  AccordionInfo,
  Title,
  Subtitle,
  Link,
  IconWrapper,
  AccordionGroup,
} from './FAQ.styled';

const accordionData = [
  {
    title: "Why Hire Art?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna."
  },

  {
    title: "How much do I need to pay?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna. Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna."
  },

  {
    title: "How much time does it take to find a job?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna. Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna. Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna."
  },

  {
    title: "What salary amount is fair?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna."
  },

  {
    title: "What amount is fair?",
    content:
      "Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna."
  }
];

export const FAQ = ({title, children, link}) => {
  return (
    <AccordionSection>
      <AccordionInfo>
        <Title>{title}</Title>
        <Subtitle>{children}
            <Link href = 'mailto: help@hireart.com'>{link}</Link>
        </Subtitle>
        <IconWrapper>
          <IconPen/>
        </IconWrapper>
      </AccordionInfo>
      <AccordionGroup>
        {accordionData.map(({ title, content }) => (
          <Accardion title={title} content={content} />
        ))}
      </AccordionGroup>
    </AccordionSection>
  );
};

FAQ.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

FAQ.defaultProps = {
  title: 'Frequently Asked Questions',
  children: 'Don`t see your question? email ',
  link: 'help@hireart.com',
};
