import { Button } from "../../atoms/Button";
import { AboutContainer } from "./styled";

export function About() {
  function handleDownloadCV() {

  }

  return (
    <AboutContainer>
      <h1>About me</h1>
      <h4>Front-end Developer</h4>
      <article>
        Desenvolvedor Full Stack há mais de um ano. Com conhecimentos sólidos <br />
        no ecossistema JavaScript (React, Vue, Node, React Native).
      </article>
      <div className="buttons">
        <Button onClick={handleDownloadCV}>Download CV</Button>
        <Button onClick={handleDownloadCV}>Another button</Button>
      </div>
    </AboutContainer>
  );
}