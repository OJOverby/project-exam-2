import styled from "styled-components";

export const Carousel = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 1rem 0.25rem 1.5rem 0.25rem;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 300px;
    scroll-snap-align: start;
  }
`;
