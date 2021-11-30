import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 1rem;

  .header-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .icons {
    width: 250px;
    display: flex;
    justify-content: space-between;
  }

  .scroll-down {
    width: 30px;
    height: 30px;

    position: absolute;
    bottom: 10%;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    width: 100vw;

    align-items: center;

    .header-content .title, .description {
      font-size: 1.2rem;
    }

    .header-content {
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .icons {
      width: 100%;
      display: flex;
      justify-content: center;

      a img {
        width: 25px;
      }

      a + a {
        margin-left: 10px;
      }
    }
  }
`;