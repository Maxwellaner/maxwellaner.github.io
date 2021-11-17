import styled, { keyframes } from "styled-components";

export const ScrollDownContainer = styled.div<{ isScrolling: boolean }>`
  display: ${({ isScrolling }) => {
    return isScrolling ? 'none' : '';
  }};
  
  position: fixed;
  bottom: 0;
  right: 50%;
  z-index: 999;

  margin-bottom: 20px;

  img {
    width: 30px;

    --webkit-animation-name: ${({ }) => {
    return animate();
  }};
    animation-name: ${({ }) => {
    return animate();
  }};
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    }

  transition: all ease-in-out;

`;

const animate = () => keyframes`
  0% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
  50% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
`;