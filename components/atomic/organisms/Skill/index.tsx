import { useEffect, useRef, useState } from "react";
import { Progressbar } from "../../atoms/Progressbar";
import { Content, SkillContainer } from "./styled";

type SkillProps = {
  technologies: [
    {
      id: number;
      title: string;
      percentage: number;
    }
  ]
}

export function Skill({ technologies }: SkillProps) {
  const [scroll, setScroll] = useState(0);
  const [animateProgressbar, setAnimateProgressbar] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
  }, [])

  function listenScroll() {
    if (process.browser) {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      setScroll(scrollTop);
    }
  }

  useEffect(() => {
    const skillsOffset = document.getElementById("skills")?.offsetTop;

    if (scroll >= (skillsOffset as number * 0.8)) {
      setAnimateProgressbar('anime-progressbar');
    } else if (scroll < (skillsOffset as number * 0.5)) {
      setAnimateProgressbar('');
    }
  }, [scroll])

  function getAnimationTime(id: number) {
    const animationTime = {
      childNumber: id,
      duration: 2 + (id * 0.2),
    }

    return animationTime;
  }

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

Skill.defaultProps = {
  technologies: [
    {
      id: 1,
      title: 'React',
      percentage: 90,
    },
    {
      id: 2,
      title: 'Node',
      percentage: 80,
    },
    {
      id: 3,
      title: 'React Native',
      percentage: 80,
    },
    {
      id: 4,
      title: 'HTML',
      percentage: 95,
    },
    {
      id: 5,
      title: 'CSS',
      percentage: 95,
    },
    {
      id: 6,
      title: 'Vue',
      percentage: 70,
    },
    {
      id: 7,
      title: 'Flutter',
      percentage: 70,
    },
  ]
}