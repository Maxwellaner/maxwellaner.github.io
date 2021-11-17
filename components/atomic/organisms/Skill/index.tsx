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
            <h1>Main skills and experiences</h1>
            <p className="text">
              Textão sobre habilidades e experiências
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
