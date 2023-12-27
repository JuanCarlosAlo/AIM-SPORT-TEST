import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledVs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/imgs/vs-bg.png');
    background-size: cover;
    background-position: bottom;
    z-index: -1;
    opacity: ${({ visible }) => (visible === 1 ? 1 : 0)};
    transition: opacity 0.85s ease;
  }

`;

const StyledVsText = styled.p`
  font-family: PSVBoldItalic;
  font-size: 15rem;
  opacity: ${({ visible }) => (visible === 1 ? 1 : 0)};
  transition: opacity 0.85s ease;
`;

export { StyledVs, StyledVsText };
