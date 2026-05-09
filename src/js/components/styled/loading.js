import styled from "styled-components";

export const Loading = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 150px auto;

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * var(--i)));
  }

  span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background-color: black;
    border-radius: 50%;

    /* Hidden before animation starts */
    transform: scale(0);

    animation: animate 2s linear infinite;
    animation-delay: calc(0.1s * var(--i));

    /* Prevents initial flash */
    animation-fill-mode: both;
  }

  @keyframes animate {
    0% {
      transform: scale(0);
    }

    10% {
      transform: scale(1.2);
    }

    80%,
    100% {
      transform: scale(0);
    }
  }

  .plane {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: rotating 2s linear infinite;
    animation-delay: -1.1s;
  }

  @keyframes rotating {
    0% {
      transform: rotate(10deg);
    }

    100% {
      transform: rotate(370deg);
    }
  }

  .plane::before {
    content: "";
    position: absolute;
    top: 90px;
    left: 90px;
    width: 100px;
    height: 100px;

    transform: rotate(180deg);

    background-image: url("/svg/plane.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;
