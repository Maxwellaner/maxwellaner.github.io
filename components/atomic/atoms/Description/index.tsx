import { HTMLAttributes, ReactNode } from "react";
import { DescriptionText } from "./styled";

type DescriptionProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  fontSize?: string;
}

export function Description({ children, fontSize, ...props }: DescriptionProps) {
  return (
    <DescriptionText
      fontSize={fontSize || ''}
      {...props}
    >
      {children}
    </DescriptionText>
  )
}