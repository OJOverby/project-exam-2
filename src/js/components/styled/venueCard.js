import styled from "styled-components";

export const VenueCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  max-width: 70%;
  text-align: center;
  margin: 20px 10px 0px 10px;
  background-color: white;
  
  img {
    width: 100%;
    height: auto;
    margin-bottom: 5px;
    border-radius: 10px;

  }
  .buttonContainer {
    margin-top: auto;
  }

  .greencheckmark {
  color: green;
  }

  .redx {
  color: red;
  }
`;
