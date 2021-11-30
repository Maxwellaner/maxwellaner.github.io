import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  max-width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 450px) {
    min-height: 100vh;
  }
`;