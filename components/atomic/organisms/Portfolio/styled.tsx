import styled from "styled-components";

export const PortfolioContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  min-height: 60vh;
  border: 1px solid red;

  display: flex;
  align-items: center;
  justify-content: center;

  .grid {
    border: 1px solid green;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-auto-flow: row;
    gap: 20px;
  }

  @media (max-width: 1300px) {
    .grid {
      grid-template-columns: auto auto;
    }
  }

  @media (max-width: 800px) {
    .grid {
      grid-template-columns: auto;
    }
  }
`;