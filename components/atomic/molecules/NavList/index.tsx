import { NavLink } from "../../atoms/NavLink";
import { UnorderedList } from "./styled";

export function NavList() {
  return (
    <UnorderedList>
      <NavLink>
        Quem sou
      </NavLink>
      <NavLink>
        Skills
      </NavLink>
      <NavLink>
        Portfolio
      </NavLink>
    </UnorderedList>
  );
}