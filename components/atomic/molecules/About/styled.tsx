import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-left: 30px;

  .buttons {
    margin-top: 30px;

    a + a {
      margin-left: 10px;
    }
  }

  @media (max-width: 450px) {
    font-size: .8rem;
    margin-inline: 20px;
  }
`;