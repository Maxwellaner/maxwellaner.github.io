import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  max-width: 100%;

  min-height: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px;

  .footer-content {
    width: 70vw;

    display: flex;
    
    justify-content: space-between;
  }

  .footer-content .footer-part {
    display: flex;
    flex-direction: column;

    width: 33%;

    .footer-about {
      width: 80%;
    }

    strong {
      margin-bottom: 20px;
    }

    .footer-social-buttons {
      display: flex;
      
      a + a {
        margin-left: 10px;
      }
    }

    .technologies {
      img + img {
        margin-left: 10px;
      }

      img {
        width: 2rem;
      }
    }
  }

  @media (max-width: 1100px) {
    .footer-part.tech {
      display: none;
    }
    
    .footer-content .footer-part {
      width: 50%;
    }
  }

  @media (max-width: 450px) {
    padding: 0px;
    .footer-content {
      width: 100vw;
      font-size: .7rem;
      margin-inline: 20px;

      .footer-part .footer-about {
        width: 95%;
      }
    }

    .footer-part {
      width: 50vw;
    }

    .footer-social-buttons {
      a img {
        width: 20px;
      }
      a + a {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 320px) {
    .footer-social-buttons {
      a img {
        width: 16px;
      }
    }
  }
`;