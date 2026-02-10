import styled from "styled-components";

export const Navigation = styled.div`
  background-color: rgb(225, 215, 186);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

ul {
    list-style: none;
     display: flex;
     gap: 2rem;
     margin-right: 70px;
}

a {

  text-decoration: none;
  color: black;
}

h1 {
  margin-left: 30px;
}

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
  }
  
`;
