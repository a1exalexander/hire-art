import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '../Icon';
import { 
  StyledAccordion, 
  AccordionTitleWrapper, 
  AccordionTitle, 
  AccordionImage,
  AccordionContent,
} from './Accardion.styled';

export const Accardion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledAccordion>
      <AccordionTitleWrapper onClick={() => setIsActive(!isActive)}> 
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionImage>
          {isActive ? 
          (<Icon name="minus" size="24" color="#5073EE"/>) : 
          (<Icon name="plus" size="24" color="#5073EE"/>)
          }
        </AccordionImage>
        </AccordionTitleWrapper>
      {isActive && <AccordionContent>{content}</AccordionContent>}
      </StyledAccordion>
  );
};

Accardion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
