import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin-top: 4rem;
  background: white;
  border-top: 5px solid ${(props) => props.theme.color.secondary};

  .footerContainer {
    width: min(1180px, 92%);
    margin: 0 auto;
    padding: 5px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .brand h2 {
    margin: 0;
    font-family: "DM Serif Display", serif;
    color: ${(props) => props.theme.color.primary};
  }

  .brand p {
    color: #666;
    font-size: 0.9rem;
  }

  .links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .links a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .links a:hover {
    color: ${(props) => props.theme.color.primary};
  }

  .bottomBar {
    text-align: center;
    padding: 1px 0;
    font-size: 0.85rem;
    color: #777;
    border-top: 1px solid #eee;
  }

  @media (max-width: 700px) {
    .footerContainer {
      flex-direction: column;
      align-items: flex-start;
    }

    .links {
      gap: 1rem;
    }
  }
`;
