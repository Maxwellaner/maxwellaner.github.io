import { ReactNode, LiHTMLAttributes } from "react";
import { CustomItem } from "./styled";
import Link from 'next/link';

type NavLinkProps = LiHTMLAttributes<HTMLLIElement> & {
  children: ReactNode;
};

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <CustomItem
      {...props}
    >
      <Link href="#">
        <a>
          {children}
        </a>
      </Link>
    </CustomItem>
  );
}