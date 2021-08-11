import { CustomImage, PortfolioAvatarContainer } from "./styled";

export type PortfolioAvatarProps = {
  img1: string;
  img2: string;
  img3: string;
  name: string;
}

export function PortfolioAvatar({
  img1,
  img2,
  img3,
  name
}: PortfolioAvatarProps) {
  return (
    <PortfolioAvatarContainer>
      <div className="images">
        <CustomImage
          src="/assets/avatar.jpeg"
          alt={name}
          shadow
          width="100px"
          zIndex={1}
        />
        <CustomImage
          absolute
          top={70}
          left={60}
          src="/assets/avatar.jpeg"
          alt={name}
          width="80px"
          zIndex={3}
        />
        <CustomImage
          absolute
          top={22}
          left={90}
          src="/assets/avatar.jpeg"
          alt={name}
          width="60px"
          zIndex={2}
        />
      </div>
      <div className="info">

      </div>
    </PortfolioAvatarContainer>
  );
}