import { useState } from "react";
import {
  AccContainer,
  AccItem,
  AccItemHeader,
  AccItemTitle,
  AccItemText,
  CloseButton,
} from "./AccardionV2.styled";

export const AccardionV2 = () => {
  const data = [
    {
      accTitle: "Why Hire Art?",
      accText:
        "Lorem Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.",
    },
    {
      accTitle: "How much do I need to pay?",
      accText:
        "Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.",
    },
    {
      accTitle: "How much time does it take to find a job?",
      accText:
        "Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.",
    },
    {
      accTitle: "What salary amount is fair?",
      accText:
        "Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.",
    },
    {
      accTitle: "What amount is fair?",
      accText:
        "React comes with a built-in way to validate props, these are called propTypes. React components can be part of a hierarchy of bigger components, therefore, a good practice is to validate prop data types. Think of propTypes as building a strongly-typed system inside each component. This type system adds clarity and intent to React components.",
    },
  ];

  const [accardionActive, setAccardionActive] = useState(null);
  const [accardionHeight, setAccardionHeight] = useState(0);

  const onActive = (idx) => {
    if (accardionActive === idx) {
      setAccardionActive(null);
      setAccardionHeight(0);
    } else {
      setAccardionActive(idx);
      setAccardionHeight(document.getElementById(`accText-${idx}`).scrollHeight);
    }
  };

  return (
    <AccContainer>
      {data.map((item, idx) => {
        return (
          <AccItem onClick={() => onActive(idx)}>
            <AccItemHeader>
              <AccItemTitle>{item.accTitle}</AccItemTitle>
              <CloseButton onActive={accardionActive === idx}></CloseButton>
            </AccItemHeader>
            <AccItemText style={{ maxHeight: accardionActive === idx ? `${accardionHeight}px` : 0 }}>
              <div id={`accText-${idx}`}>{item.accText}</div>
            </AccItemText>
          </AccItem>
        );
      })}
    </AccContainer>
  );
};

