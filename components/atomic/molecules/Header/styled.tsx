import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
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
`;