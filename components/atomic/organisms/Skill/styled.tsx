import styled from "styled-components";

export const SkillContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .tec-skills {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1150px) {
    .tec-skills {
      flex-direction: column;
      justify-content: center;

      .skill-info, .skills {
        text-align: center;
        width: 100%;
      }
    }
  }
`;

export const Content = styled.div`
  width: 60vw;
  padding: 50px;

  display: flex;
  justify-content: space-between;

  .skills {
    width: 50%;
  }

  @media (max-width: 1150px) {
    width: 70vw;
  }

  @media (max-width: 450px) {
    width: 100vw;
    padding: 0px;

    .tec-skills {
      width: 100vw;
      margin-inline: 20px;

      .skill-info, .skills {
        text-align: left;
        font-size: .8rem;
      }
    }
  }
`;