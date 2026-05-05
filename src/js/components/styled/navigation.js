import styled from "styled-components";

export const Navigation = styled.header`
  background-color: white;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 5px solid ${(props) => props.theme.color.secondary};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);

  .navContainer {
    width: min(1180px, 92%);
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 0 auto;
  }

  .titleContainer {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 2px 0;
    font-family: "DM Serif Display", serif;
    letter-spacing: 0.5px;
    line-height: 1;
    flex-shrink: 0;
  }

  .titleContainer a {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .titleContainer svg {
    width: 35px;
    height: 35px;
    display: block;
  }

  h1 {
    margin: 0;
    line-height: 1;
    color: ${(props) => props.theme.color.primary};
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.3rem;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #111;
    font-weight: 600;
  }

  a:hover {
    color: #4c7cf3;
  }

  .searchForm {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .searchForm input {
    width: 180px;
    padding: 0.55rem 0.8rem;
    border-radius: 999px;
    border: 1px solid #ccc;
    font-size: 0.9rem;
  }

  .searchForm input:focus {
    outline: none;
    border-color: #4c7cf3;
  }

  .searchForm button,
  .menuButton {
    border: none;
    cursor: pointer;
    font-weight: 700;
  }

  .searchForm button {
    padding: 0.55rem 0.9rem;
    border-radius: 999px;
    background: #4c7cf3;
    color: white;
  }

  .searchForm button:hover {
    background: #3a64cc;
  }

  .menuButton {
    display: none;
    background: transparent;
    font-size: 1.8rem;
    color: #111;
  }

  @media (max-width: 900px) {
    .navContainer {
      min-height: 68px;
    }

    .menuButton {
      display: block;
    }

    nav {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      display: none;
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
      padding: 1rem 4%;
      background: white;
      border-bottom: 1px solid #eee;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    }

    nav.open {
      display: flex;
    }

    ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .searchForm {
      width: 100%;
    }

    .searchForm input {
      width: 100%;
    }
  }
`;
