import { Picture } from "../../atoms/Picture";
import { About } from "../../molecules/About";
import { AboutmeContainer } from "./styled";

export function Aboutme() {
  return (
    <AboutmeContainer>
      <Picture />
      <About />
    </AboutmeContainer>
  );
}