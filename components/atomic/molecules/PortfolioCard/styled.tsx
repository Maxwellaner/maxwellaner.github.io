import styled, { keyframes } from "styled-components";

export const Card = styled.article`
  width: 500px;
  height: auto;
  overflow: hidden;

  position: relative;

  background-color: #333;
  text-align: center;

  cursor: pointer;

  transition: height .5s ease-in-out;

  h1 {
    margin: 10px 0px 10px 0px;
    color: #fff;
  }

  img {
    width: 100%;
    margin-bottom: 5px;

    box-shadow: 0px 10px 10px rgba(0, 0, 0, 1);
  }

  .hidden-content {
    display: none;
    height: 50%;
    flex-direction: column;
    align-items: center;

    justify-content: space-evenly;

    .separator {
      border: 1px solid #fff;
      width: 0px;
      margin-top: 10px;

      align-self: flex-start;

      transition: width .5s ease-in-out;
    }

    .content {
      max-width: 70%;

      p {
        margin: 0px;
      }
    }

    button {
      height: 35px;
      width: 70%;
      margin-bottom: 10px;
    }
  }

  &:hover {
    height: auto;

    .hidden-content {
      display: flex;
      .separator {
        width: 70%;
      }

      .content {
        -webkit-animation-name: ${({ }) => {
    return animate(-250);
  }};
              animation-name: ${({ }) => {
    return animate(-250);
  }};
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }

      button {
        -webkit-animation-name: ${({ }) => {
    return animate(250);
  }};
              animation-name: ${({ }) => {
    return animate(250);
  }};
        -webkit-animation-duration: 1.2s;
        animation-duration: 1.2s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
    }
  }
`;

const animate = (pixels: number) => keyframes`
  from {
      transform: translateX(${pixels}px);
    }

    to {
      transform: translateX(0px);
    }
`;
