import { Button } from "../../atoms/Button";
import { AboutContainer } from "./styled";

export function About() {
  return (
    <AboutContainer id="aboutme">
      <h1>Um pouco sobre mim...</h1>
      <h4>Desenvolvedor Front-end</h4>
      <p>
        Atuo como Full Stack (com preferência no Front-end)<br /> desenvolvendo diariamente soluções de ponta em sistemas de grande porte<br />
        nas três frentes: Web, Mobile e Backend.
        <br />
        <br />
        Pai de três meninos e apaixonado por código e desafios.
        <br />
        <br />
        Role para baixo e confira minhas principais habilidades e portfolio.
      </p>
      <div className="buttons">
        <Button href="/api/maxwellaner-curriculum" rel="noreferrer" target="_blank" >Download CV</Button>
      </div>
    </AboutContainer>
  );
}