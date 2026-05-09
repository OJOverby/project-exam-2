import styled from "styled-components";

export const Navigation = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;

  width: 100%;
  background-color: white;
  border-bottom: 1px solid #eef0f4;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);

  .navContainer {
    position: relative;
    width: min(1180px, 92%);
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    margin: 0 auto;
  }

  .logoLink {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    flex-shrink: 0;
    text-decoration: none;
    color: ${(props) => props.theme.color.primary};
  }

  .logoLink svg {
    width: 35px;
    height: 35px;
    display: block;
  }

  .logoText {
    padding: 0.2rem 0;
    border-top: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    font-family: "DM Serif Display", serif;
    font-size: 1.8rem;
    line-height: 1;
    letter-spacing: 0.5px;
  }

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  nav a {
    position: relative;
    display: inline-flex;
    align-items: center;
    color: #222;
    font-weight: 700;
    padding: 0.3rem 0;
    transition:
      color 0.2s ease,
      opacity 0.2s ease;
  }

  nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.35rem;
    width: 100%;
    height: 2px;
    background: #4c7cf3;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  nav a:hover {
    color: #4c7cf3;
  }

  nav a:hover::after,
  nav a.active::after {
    transform: scaleX(1);
  }

  .profileLink {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .navAvatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #eef2ff;
    color: #3156b3;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 800;
    overflow: hidden;
  }

  .navAvatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .searchForm {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem;
    border-radius: 999px;
    background: #f7f8fb;
    border: 1px solid #e1e5ef;
  }

  .desktopSearch {
    flex: 1;
    max-width: 360px;
  }

  .mobileSearch {
    display: none;
  }

  .searchForm input {
    flex: 1;
    min-width: 0;
    border: none;
    background: transparent;
    padding: 0.55rem 0.75rem;
    font: inherit;
    font-size: 0.9rem;
  }

  .searchForm input:focus {
    outline: none;
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
    width: 20px;
    height: 20px;
    display: block;
  }

  .searchForm button:not(.searchButton) {
    flex-shrink: 0;
    border: none;
    cursor: pointer;
    font-weight: 700;
    padding: 0.55rem 0.9rem;
    border-radius: 999px;
    background: #4c7cf3;
    color: white;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .searchForm button:not(.searchButton):hover {
    background: #3a64cc;
    transform: translateY(-1px);
  }

  .searchForm:focus-within {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
  }

  .menuButton {
    display: none;
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50%;
    background: #f7f8fb;
    color: #111;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  .menuButton span {
    display: block;
    font-size: 1.7rem;
    line-height: 1;
    font-weight: 700;
    transform: translateY(-1px);
  }

  .menuButton:hover {
    background: #eef2ff;
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

  .logoLink:focus-visible,
  nav a:focus-visible,
  .menuButton:focus-visible,
  .searchButton:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
    border-radius: 8px;
  }

  @media (max-width: 980px) {
    .navContainer {
      gap: 1rem;
    }

    .desktopSearch {
      max-width: 280px;
    }

    ul {
      gap: 0.75rem;
    }
  }

  @media (max-width: 860px) {
    .navContainer {
      min-height: 68px;
    }

    .desktopSearch {
      display: none;
    }

    .menuButton {
      display: inline-flex;
    }

    nav {
      position: absolute;
      top: calc(100% + 0.75rem);
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
      padding: 1rem;
      border-radius: 18px;
      background: white;
      border: 1px solid #eef0f4;
      box-shadow: 0 16px 38px rgba(0, 0, 0, 0.12);
      opacity: 0;
      transform: translateY(-8px);
      pointer-events: none;
      visibility: hidden;
      transition:
        opacity 0.2s ease,
        transform 0.2s ease,
        visibility 0.2s ease;
    }

    nav.open {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
      visibility: visible;
    }

    .mobileSearch {
      display: flex;
      width: 100%;
    }

    ul {
      flex-direction: column;
      align-items: stretch;
      gap: 0.5rem;
    }

    li {
      width: 100%;
    }

    nav a,
    .profileLink,
    .navCta {
      width: 100%;
      justify-content: flex-start;
      padding: 0.85rem 1rem;
      border-radius: 12px;
    }

    nav a::after {
      bottom: 0.55rem;
      left: 1rem;
      width: calc(100% - 2rem);
    }

    nav a:hover {
      background: #f5f7ff;
    }

    .navCta,
    .navCta:hover,
    .navCta.active {
      background: #4c7cf3;
      color: white;
    }
  }

  @media (max-width: 430px) {
    .logoText {
      font-size: 1.55rem;
    }

    .logoLink svg {
      width: 30px;
      height: 30px;
    }
  }
`;
