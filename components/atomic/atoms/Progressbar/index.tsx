import { HtmlHTMLAttributes } from 'react';
import { Progress, ProgressbarContainer } from "./styled";
import classnames from 'classnames';

type ProgressbarProps = HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  percentage: number;
  animateProgressbar: string;
  animationTime: {
    childNumber: number;
    duration: number;
  }
}

export function Progressbar({ title, percentage, animateProgressbar, animationTime, ...props }: ProgressbarProps) {
  return (
    <ProgressbarContainer childNumber={animationTime.childNumber} duration={animationTime.duration} {...props}>
      <div className="info">
        <strong className="title">
          {title}
        </strong>
        <strong className="percentage">
          {percentage}%
        </strong>
      </div>
      <Progress percentage={percentage}>
        <div className={classnames(`fill ${animateProgressbar}`)}></div>
      </Progress>
    </ProgressbarContainer>
  );
}