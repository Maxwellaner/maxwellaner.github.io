import { Title } from "../../atoms/Title";
import { PortfolioSystemContainer } from "./styled";

type PortfolioSystemProps = {
  title: string;
  hero: string;
  text: string;
  site?: string;
  direction: string;
}

export function PortfolioSystem({ hero, text, title, site, direction }: PortfolioSystemProps) {
  function handleClick() { }

  return (
    <PortfolioSystemContainer direction={direction}>
      <div className="text">
        <Title>{title}</Title>
        <p>{text}</p>
        {site ? (
          <a href={site} target="_blank" rel="noreferrer">Detalhes</a>
        ) : (
          <a onClick={handleClick} rel="noreferrer">Detalhes</a>
        )}
      </div>
      <div className="hero">
        <img src={hero} alt={title} />
      </div>
    </PortfolioSystemContainer>
  );
}