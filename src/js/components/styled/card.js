import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 18px;
  background: white;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 38px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 210px;
    object-fit: cover;
  }

  .cardContent {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  .titleLink {
    color: inherit;
    text-decoration: none;
  }

  .titleLink:hover {
    color: #4c7cf3;
  }

  h2 {
    font-size: 1.2rem;
    line-height: 1.25;
    margin: 0;
    color: #111;
  }

  p {
    margin: 0;
    color: #555;
  }

  .location {
    font-size: 0.95rem;
  }

  .stars {
    display: inline-flex;
    gap: 0.25rem;
  }

  .priceRow {
    margin-top: auto;
    padding: 1rem;
    border-top: 1px solid #eee;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .price {
    display: flex;
    flex-direction: column;
  }

  .price strong {
    font-size: 1.3rem;
    color: #111;
  }

  .price span {
    font-size: 0.8rem;
    color: #777;
  }

  .buttonLink {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    padding: 0.75rem 1rem;
    border-radius: 999px;
    background: #4c7cf3;
    color: white;
    font-weight: 700;
    text-decoration: none;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .buttonLink:hover {
    background: #3a64cc;
    transform: translateY(-1px);
  }

  .buttonLink:focus-visible,
  .titleLink:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
    border-radius: 8px;
  }
`;
