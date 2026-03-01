import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  height: 800px;
  background-image: url("/images/heroImage3.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .text-container {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    background-color: ${(props) => props.theme.color.secondary};
    padding: 10px 70px;
    border-radius: 10px;
    text-align: center;
  }
`;