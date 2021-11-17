import styled from "styled-components";

export const LeftContactBarContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 60px;
  right: auto;
  z-index: 10;
  color: #fff;
  
  ul {
    display: flex;
    flex-direction: column;
    --webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;

    li a img {
      width: 25px;
      margin-bottom: 8px;
    }

    li:last-child {
      margin-bottom: 20px;
    }
  }

  ul::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #fff;
  }
`;