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
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-block: 100px;

    img {
      width: 200px;
      cursor: pointer;
    }

    img + img {
      margin-left: 20px;
    }
  }

  @media (max-width: 450px) {
    .companies {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-block: 100px;

      img {
        width: 80px;
        cursor: pointer;
      }

      img + img {
        margin-left: 20px;
      }
  }
  }
`;
