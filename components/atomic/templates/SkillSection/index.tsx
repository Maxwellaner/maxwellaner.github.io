import { Skill } from "../../organisms/Skill";

type SkillSectionProps = {
  animateProgressbar: string;
  getAnimationTime: (id: number) => {
    childNumber: number;
    duration: number;
  };
}

export function SkillSection({ animateProgressbar, getAnimationTime }: SkillSectionProps) {
  return <Skill animateProgressbar={animateProgressbar} getAnimationTime={getAnimationTime} />
}