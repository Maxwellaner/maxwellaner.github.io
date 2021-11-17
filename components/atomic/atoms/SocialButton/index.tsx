import { SocialLink } from './styled';

type SocialButtonProps = {
  src: string;
  alt: string;
  link: string;
}

export function SocialButton({ src, alt, link }: SocialButtonProps) {
  return (
    <SocialLink href={link} target="_blank" rel="noreferrer">
      <img
        src={src}
        alt={alt}
      />
    </SocialLink>
  );
}