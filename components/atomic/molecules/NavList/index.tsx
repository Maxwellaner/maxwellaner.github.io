import { NavLink } from "../../atoms/NavLink";
import { UnorderedList } from "./styled";

export function NavList() {
  return (
    <UnorderedList>
      <NavLink scrollTo="aboutme" offSet={-320}>
        Quem sou
      </NavLink>
      <NavLink scrollTo="skills" offSet={-20}>
        Skills
      </NavLink>
      <NavLink scrollTo="portfolio" offSet={-100}>
        Portfolio
      </NavLink>
    </UnorderedList>
  );
}