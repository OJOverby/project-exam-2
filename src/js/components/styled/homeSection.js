import styled from "styled-components";

export const HomeSection = styled.section`
  width: min(1180px, 92%);
  margin: 3rem auto 80px auto;

  &.statusMessage,
  .emptyState {
    padding: 2rem;
    border-radius: 18px;
    background: white;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
    color: #555;
    text-align: center;
  }

  .sectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .sectionHeader h2 {
    margin: 0;
    font-size: 1.8rem;
    color: #111;
  }

  .sectionHeader p {
    margin: 0.4rem 0 0 0;
    color: #666;
  }

  .sectionHeader a {
    color: #4c7cf3;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  .sectionHeader a:hover {
    text-decoration: underline;
  }

  .benefits,
  .categoryGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .benefits > div,
  .categoryCard,
  .hostCta {
    border-radius: 18px;
    background: white;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  }

  .benefits > div {
    padding: 1.25rem;
  }

  .benefits h3 {
    margin: 0 0 0.4rem;
    color: #111;
  }

  .benefits p {
    margin: 0;
    color: #666;
    line-height: 1.5;
  }

  .categoryCard {
    position: relative;
    min-height: 180px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    padding: 1.25rem;
    color: white;
    text-decoration: none;
    font-weight: 800;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .categoryCard:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 38px rgba(0, 0, 0, 0.12);
  }

  .categoryCard img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .categoryCard::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.55)
    );
    z-index: 1;
  }

  .categoryCard span {
    position: relative;
    z-index: 2;
    font-size: 1.2rem;
  }

  .hostCta {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .hostCta h2 {
    margin: 0;
    color: #111;
  }

  .hostCta p {
    margin: 0.4rem 0 0;
    color: #666;
  }

  .buttonLink {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    padding: 0.85rem 1.4rem;
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
  .sectionHeader a:focus-visible,
  .categoryCard:focus-visible {
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
    .sectionHeader {
      flex-direction: column;
      align-items: flex-start;
    }

    .hostCta {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
