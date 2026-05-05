import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 210px;
    object-fit: cover;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    font-size: 1.2rem;
    margin: 1rem 1rem 0.4rem 1rem;
  }

  p {
    margin: 0.25rem 1rem;
    color: #555;
  }

  .location {
    font-size: 0.95rem;
  }

  .rating {
    margin-top: 0.5rem;
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

  button {
    padding: 0.7rem 1rem;
    border-radius: 999px;
    border: none;
    background: #4c7cf3;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }

  button:hover {
    background: #3a64cc;
  }
`;
