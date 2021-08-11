import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100vw;
  max-width: 100%;
  height: 8vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 15px 12px 12px rgba(0, 0, 0, 0.06);

  .container {
    width: 80vw;
    display: flex;
    justify-content: space-between;
  }

  .technologies {
    display: flex;

    img {
      width: 40px;
      margin-right: 10px;
    }
  }
`;