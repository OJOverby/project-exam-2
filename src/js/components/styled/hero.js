import styled from "styled-components";

export const Hero = styled.section`
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;

  background:
    linear-gradient(rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)),
    url("/images/heroImage3.jpg") center / cover no-repeat;

  color: white;
  text-align: center;

  .text-container {
    width: min(1180px, 92%);
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    transform: translateY(4rem);
  }

  h1 {
    max-width: 760px;
    margin: 0;
    font-size: clamp(2.4rem, 5vw, 4.25rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 560px;
    margin: 1rem 0 0;
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.5;
    opacity: 0.95;
  }

  .heroSearch {
    margin-top: 1.75rem;
    width: min(100%, 620px);

    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.45rem;
    border-radius: 999px;
    background: white;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  }

  .heroSearch input {
    flex: 1;
    min-width: 0;
    border: none;
    padding: 0.85rem 1.1rem;
    border-radius: 999px;
    font: inherit;
    font-size: 1rem;
  }

  .searchButton {
    flex-shrink: 0;
    background: transparent;
    border: none;
    padding: 0.55rem;
    cursor: pointer;
    border-radius: 999px;
  }

  .searchButton img {
    width: 25px;
    height: 25px;
    display: block;
  }

  .heroSearch input:focus {
    outline: none;
  }

  .heroSearch button {
    flex-shrink: 0;
    border: none;
    border-radius: 999px;
    padding: 0.85rem 1.6rem;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .heroSearch button:hover {
    transform: translateY(-2px);
  }

  .heroSearch:focus-within {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
  }

  .srOnly {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }

  @media (max-width: 700px) {
    min-height: 480px;
    padding: 2rem 0;

    .text-container {
      transform: translateY(-0.5rem);
    }

    h1 {
      max-width: 340px;
      font-size: clamp(2rem, 10vw, 3rem);
      line-height: 1.05;
    }

    p {
      max-width: 340px;
      font-size: 1rem;
    }

    .heroSearch {
      width: min(100%, 360px);
      gap: 0.35rem;
      padding: 0.35rem;
      border-radius: 999px;
    }

    .heroSearch input {
      padding: 0.75rem 0.9rem;
      font-size: 0.95rem;
    }

    .heroSearch button {
      padding: 0.75rem 1rem;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 420px) {
    .heroSearch {
      width: min(100%, 330px);
    }

    .heroSearch input {
      padding-right: 0.4rem;
    }

    .heroSearch button {
      padding-inline: 0.85rem;
    }
  }
`;
