import { ReactNode, AnchorHTMLAttributes } from "react";
import { CustomButton } from "./styled";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <CustomButton {...props}>
      {children}
    </CustomButton>
  );
}