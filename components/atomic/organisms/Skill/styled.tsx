import styled from "styled-components";

export const SkillContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background-color: #fff;

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
  width: 70vw;
  border-radius: 30px;
  padding: 50px;

  background-color: #F1F5F6;

  display: flex;
  justify-content: space-between;

  .skills {
    width: 50%;
  }
`;