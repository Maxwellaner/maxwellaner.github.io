import styled from "styled-components";

export const RightNameContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 60px;
  z-index: 10;
  color: #fff;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    --webkit-box-align: center;
    position: relative;

    a {
      writing-mode: vertical-rl;
    }
  }

  div:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #fff;

    margin-top: 25px;
  }
`;