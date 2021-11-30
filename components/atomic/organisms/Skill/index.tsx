import { Progressbar } from "../../atoms/Progressbar";
import { Content, SkillContainer } from "./styled";

import technologies from '../../../json/skills.json';

type SkillProps = {
  animateProgressbar: string;
  getAnimationTime: (id: number) => {
    childNumber: number;
    duration: number;
  };
}

export function Skill({ animateProgressbar, getAnimationTime }: SkillProps) {
  return (
    <SkillContainer id="skills">
      <Content>
        <div className="tec-skills">
          <div className="skill-info">
            <h1>Principais habilidades e experiências</h1>
            <p className="text">
              Conhecimento sólido no ecossistema JavaScript.
              <br />
              Trabalho principalmente com React, Next.js, React Native
              <br />
              e Backbone.js.
              <br />
              <br />
              Integrações REST e GraphQL.
              <br />
              <br />
              No backend tenho contato direto com Java e Node e banco
              <br />
              de dados relacionais como MySQL e PostgreSQL.
              <br />
              <br />
              Também possuo conhecimento em Vue.js e Flutter.
            </p>
          </div>
          <div className="skills">
            {technologies.map(item => (
              <Progressbar
                animationTime={getAnimationTime(item.id)}
                animateProgressbar={animateProgressbar}
                key={item.title}
                title={item.title}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
      </Content>
    </SkillContainer>
  );
}
