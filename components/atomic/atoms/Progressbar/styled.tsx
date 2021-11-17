import styled, { keyframes } from "styled-components";

export const ProgressbarContainer = styled.div<{ childNumber: number, duration: number }>`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;

  .info {
    display: flex;
    justify-content: space-between;
  }

  &:nth-child(${({ childNumber }) => {
    return childNumber;
  }}) {
    .fill {
      -webkit-animation-duration: ${({ duration }) => {
    return `${duration}s`;
  }};
      animation-duration: ${({ duration }) => {
    return `${duration}s`;
  }};
    }
  }
`;

export const Progress = styled.div<{ percentage: number }>`
  width: 100%;
  height: 10px;
  background-color: #c4c4c4;
  border-radius: inherit;

  .fill {
    height: inherit;
    width: 0;
    background-color: #000;
    border-radius: inherit;

    transition: all ease;
  }

  .anime-progressbar {
    -webkit-animation-name: ${({ percentage }) => {
    return animate(percentage);
  }};
    animation-name: ${({ percentage }) => {
    return animate(percentage);
  }};
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
`;

const animate = (percentage: number) => keyframes`
  from {
      width: 0;
    }

    to {
      width: ${percentage}%;
    }
`;