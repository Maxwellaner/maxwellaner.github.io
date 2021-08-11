import { Description } from "../../atoms/Description";
import { PortfolioAvatar, PortfolioAvatarProps } from "../../atoms/PortfolioAvatar";
import { Title } from "../../atoms/Title";
import { PortfolioCardContainer } from "./styled";

type PortfolioCardProps = PortfolioAvatarProps & {
  name: string;
  title: string;
  description: string;
}

export function PortfolioCard({
  name,
  title,
  description,
  img1,
  img2,
  img3
}: PortfolioCardProps) {
  return (
    <PortfolioCardContainer
      onClick={() => {
        console.log(name);
      }}
    >
      <PortfolioAvatar
        img1={img1}
        img2={img2}
        img3={img3}
        name={name}
      />
      <div className="info">
        <Title
          fontSize="18px"
        >
          {title}
        </Title>
        <Description
          fontSize="12px"
        >
          {description}
        </Description>
      </div>
    </PortfolioCardContainer>
  );
}