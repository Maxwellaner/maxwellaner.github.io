import { ReactNode, LiHTMLAttributes } from "react";
import { CustomItem } from "./styled";
import { Link } from 'react-scroll';

type NavLinkProps = LiHTMLAttributes<HTMLLIElement> & {
  children: ReactNode;
  scrollTo: string;
  offSet: number;
};

export function NavLink({ children, scrollTo, offSet, ...props }: NavLinkProps) {
  return (
    <CustomItem
      {...props}
    >
      <Link to={scrollTo} smooth offset={offSet}>
        <a rel="noreferrer">
          {children}
        </a>
      </Link>
    </CustomItem>
  );
}