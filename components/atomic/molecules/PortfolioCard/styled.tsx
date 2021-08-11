import styled from "styled-components";

export const PortfolioCardContainer = styled.div`
  width: 400px;
  min-height: 200px;
  display: flex;
  padding-left: 15px;
  padding-top: 10px;
  justify-content: space-between;

  border-radius: 10px;
  box-shadow: 2px 5px 15px 0.2em rgba(0, 0, 0, 0.6);
  cursor: pointer;

  .info {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;