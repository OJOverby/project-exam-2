import styled from "styled-components";

export const Hero = styled.section`
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url("/images/heroImage3.jpg") center/cover no-repeat;
  color: white;

  .text-container {
    max-width: 720px;
  }

  h2 {
    font-size: clamp(2.2rem, 5vw, 4rem);
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .heroSearch {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
  }

  .heroSearch input {
    width: min(420px, 100%);
    padding: 0.9rem 1rem;
    border-radius: 999px;
    border: none;
    font-size: 1rem;
  }

  .heroSearch button {
    padding: 0.9rem 1.4rem;
    border-radius: 999px;
    border: none;
    background: #4c7cf3;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }

  .heroSearch button:hover {
    background: #3a64cc;
  }

  @media (max-width: 650px) {
    .heroSearch {
      flex-direction: column;
      align-items: center;
    }

    .heroSearch input,
    .heroSearch button {
      width: 100%;
    }
  }
`;
