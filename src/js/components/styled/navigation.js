import styled from "styled-components";

export const Navigation = styled.div`
  background-color: rgb(255, 255, 255);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 5px solid ${(props) => props.theme.color.secondary};;

  .navContainer {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  .titleContainer {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 2px 0;
    margin: 5px 0;
  font-family: 'DM Serif Display', serif;
  letter-spacing: 0.5px;
  line-height: 1;



  }

  .titleContainer a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 0px; 
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

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
  }
`;
