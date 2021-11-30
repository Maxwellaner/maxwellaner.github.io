import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100vw;
  max-width: 100%;
  height: 8vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #333;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 15px 12px 12px rgba(0, 0, 0, 0.3);

  .container {
    width: 80vw;
    display: flex;
    justify-content: space-between;
  }

  .technologies {
    display: flex;

    a {
      display: flex;
    }

    a img {
      width: 40px;
      margin-right: 10px;
    }
  }

  @media (max-width: 1000px) {
    .technologies {
      display: none;
    }
  }

  @media (max-width: 450px) {
    font-size: .7rem;
  }
`;