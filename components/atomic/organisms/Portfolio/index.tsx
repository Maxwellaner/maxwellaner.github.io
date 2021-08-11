import { PortfolioAvatar } from "../../atoms/PortfolioAvatar";
import { PortfolioCard } from "../../molecules/PortfolioCard";
import { PortfolioContainer } from "./styled";

export function Portfolio() {
  return (
    <PortfolioContainer>
      <div className="grid">
        <PortfolioCard
          title="title"
          description="description"
          img1="img1"
          img2="img2"
          img3="img3"
          name="name"
        />
        <PortfolioCard
          title="title"
          description="description"
          img1="img1"
          img2="img2"
          img3="img3"
          name="name"
        />
        <PortfolioCard
          title="title"
          description="description"
          img1="img1"
          img2="img2"
          img3="img3"
          name="name"
        />
        <PortfolioCard
          title="title"
          description="description"
          img1="img1"
          img2="img2"
          img3="img3"
          name="name"
        />
      </div>
    </PortfolioContainer>
  );
}