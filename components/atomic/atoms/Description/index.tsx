import { ReactNode } from "react";
import { DescriptionText } from "./styled";

type DescriptionProps = {
  children: ReactNode;
  fontSize?: string;
}

export function Description({ children, fontSize }: DescriptionProps) {
  return (
    <DescriptionText
      fontSize={fontSize || ''}
    >
      {children}
    </DescriptionText>
  )
}