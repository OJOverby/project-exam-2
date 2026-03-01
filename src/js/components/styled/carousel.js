import styled from "styled-components";

export const Carousel = styled.div`
  margin: 0 auto 80px auto;
  display: flex;
  gap: 1rem;

  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  padding: 1rem 0.5rem;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 320px;
    scroll-snap-align: start;
  }
`;
