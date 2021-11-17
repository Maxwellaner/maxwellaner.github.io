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
`;

export const Content = styled.div`
  width: 60vw;
  padding: 50px;

  display: flex;
  justify-content: space-between;

  .skills {
    width: 50%;
  }
`;