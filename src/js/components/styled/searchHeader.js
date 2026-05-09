import styled from "styled-components";

export const SearchHeader = styled.header`
  margin: 2rem 0 1.5rem;

  .eyebrow {
    margin: 0 0 0.35rem;
    color: #4c7cf3;
    font-weight: 800;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h1 {
    margin: 0;
    color: #111;
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.1;
  }

  p {
    margin: 0.65rem 0 0;
    color: #666;
  }
`;
