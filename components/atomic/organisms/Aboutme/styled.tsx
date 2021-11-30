import styled from "styled-components";

export const AboutmeContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  height: 85vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1150px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    height: 100vh;
  }
`;