import styled from "styled-components";

export const PortfolioSystemContainer = styled.article<({ direction: string }) >`
  width: 60vw;
  display: flex;
  flex-direction: ${({ direction }) => {
    return `${direction}`;
  }};
  align-items: center;
  justify-content: space-between;

  margin-bottom: 100px;

  .text {
    width: 49%;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 50px;
    }

    a {
      color: white;
      font-weight: bold;
      font-size: .8rem;
      position: relative;
      padding: 10px;
    }

    a:before, a:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      transition: all .3s ease;
    }

    a:before {
      top: -2.5%;
      left: -1%;
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
    }

    a:after {
      bottom: -2.5%;
      right: -1%;
      border-bottom: 2px solid #fff;
      border-right: 2px solid #fff;
    }

    a:hover:before, a:hover:after{
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;
    }
  }

  .hero {
    width: 49%;
    img {
      width: 100%;
    }
  }

  @media (max-width: 1150px) {
    width: 70vw;
  }

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;

    margin-bottom: 40px;

    .hero {
      img {
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 450px) {
    width: 90vw;
    margin-inline: 40px;
    
    .text, .hero {
      width: 100%;
      
    }
  }
`;