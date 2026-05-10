import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin-top: auto;
  background: white;

  .footerContainer {
    width: min(1180px, 92%);
    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .brand h2 {
    display: inline-block;
    margin: 0;
    padding: 0.15rem 0;

    border-top: 1px solid currentColor;
    border-bottom: 1px solid currentColor;

    font-family: "DM Serif Display", serif;
    font-size: 1.8rem;
    line-height: 1;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.color.primary};
  }

  .brand p {
    margin: 0.6rem 0 0;
    color: #666;
    font-size: 0.9rem;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .links a {
    color: #222;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;

    transition:
      color 0.2s ease,
      text-decoration-color 0.2s ease;
  }

  .links a:hover {
    color: ${(props) => props.theme.color.primary};
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .links a:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 4px;
    border-radius: 4px;
  }

  .bottomBar {
    text-align: center;
    padding: 1rem 0;

    font-size: 0.85rem;
    color: #777;

    border-top: 1px solid #eee;
  }

  .bottomBar p {
    margin: 0;
  }

  @media (max-width: 700px) {
    .footerContainer {
      flex-direction: column;
      align-items: flex-start;
      padding: 1.75rem 0;
    }

    .links {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.85rem;
    }

    .links a {
      padding: 0.25rem 0;
    }
  }
`;
