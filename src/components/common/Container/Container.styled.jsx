import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  flex-direction: inherit;
  gap: inherit;
  padding-left: ${(props) => props.theme.offset.pxMobile};
  padding-right: ${(props) => props.theme.offset.pxMobile};
  @media screen and (min-width: 768px) {
    max-width: ${({
      theme: {
        offset: { maxWidth, pxDesktop },
      },
    }) => `calc(${maxWidth}px + ${pxDesktop} * 2)`};
    padding-left: ${(props) => props.theme.offset.pxDesktop};
    padding-right: ${(props) => props.theme.offset.pxDesktop};
  }
`;
