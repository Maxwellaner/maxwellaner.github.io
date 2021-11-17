import { Title } from "../../atoms/Title";
import { PortfolioSystem } from "../../molecules/PortfolioSystem";
import { PortfolioContainer } from "./styled";

import jobs from '../../../json/jobs.json';
import companies from '../../../json/companies.json';

export function Portfolio() {
  return (
    <PortfolioContainer id="portfolio">
      <Title fontSize={'2rem'} >Portfolio</Title>
      <div className="companies">
        {companies.map(company => (
          <img key={company.name} src={company.logo} alt={company.name} />
        ))}
      </div>
      {jobs.map((job, index) => (
        <PortfolioSystem
          key={job.hero}
          hero={job.hero}
          title={job.title}
          text={job.text}
          site={job.site}
          direction={(index % 2 === 0 ? 'row-reverse' : 'row')}
        />
      ))}
    </PortfolioContainer>
  );
}