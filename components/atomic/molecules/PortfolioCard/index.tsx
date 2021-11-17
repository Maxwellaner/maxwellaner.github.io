import { Card } from "./styled";
import { Title } from "../../atoms/Title";
import { Button } from "../../atoms/Button";

type PortfolioCardProps = {
  src: string;
  alt: string;
  title: string;
}

export function PortfolioCard({ alt, src, title }: PortfolioCardProps) {
  function handleClick() {

  }

  return (
    <Card>
      <img src={src} alt={alt} />
      <Title>{title}</Title>
      <div className="hidden-content">
        <div className="separator"></div>
        <div className="content">
          <p>
            SNS é um sistema administrativo para psiquiatras.
            <br />
            Ele conta com vários tipos de gráficos que auxiliam no controle dos pacientes,<br />
            exportação de dados
          </p>
        </div>
        <Button onClick={handleClick}>Detalhes</Button>
      </div>
    </Card >
  );
}