import styled from "styled-components";

export const PortfolioContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .companies {
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-block: 100px;

    img {
      width: 200px;
      cursor: pointer;
      
    }
  }
`;
