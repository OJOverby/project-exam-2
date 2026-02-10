import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #000000;
  max-width: 250px;
  text-align: center;
  margin: 20px 10px 0px 10px;
  
  img {
    width: 100%;
    height: auto;
    margin-bottom: 5px;
  }
  .buttonContainer {
    margin-top: auto;
  }
`;
