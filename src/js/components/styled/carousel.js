import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const Carousel = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  overflow-y: visible;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 1.5rem 0.25rem 2.5rem 0.25rem;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 300px;
    scroll-snap-align: start;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);

  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: none;

  background: white;
  color: #111;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);

  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;

  display: none;
  align-items: center;
  justify-content: center;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #f4f5f8;
    transform: translateY(-50%) scale(1.04);
  }

  &:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
  }

  &.left {
    left: -1.25rem;
  }

  &.right {
    right: -1.25rem;
  }

  @media (min-width: 768px) {
    display: inline-flex;
  }
`;
