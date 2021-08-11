import { ReactNode, ButtonHTMLAttributes } from "react";
import { CustomButton } from "./styled";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick: () => void;
}

export function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <CustomButton onClick={onClick} {...props}>
      {children}
    </CustomButton>
  );
}