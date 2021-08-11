import { Container } from './styled';
import { Avatar } from "../../atoms/Avatar";
import { Title } from '../../atoms/Title';
import { Description } from '../../atoms/Description';
import { SocialButton } from '../../atoms/SocialButton';

export function Header() {
  return (
    <Container>
      <Avatar />
      <div className="header-content">
        <Title>
          Hello! <br />
          i am Maxwell Laner
        </Title>
        <Description>
          I am a Front-end Developer
        </Description>
        <div className="icons">
          <SocialButton
            src="/assets/linkedinIcon.svg"
            alt="Linkedin/Maxwell"
            link="https://www.linkedin.com/in/maxwell-laner-bb815185/"
          />
          <SocialButton
            src="/assets/instagramIcon.svg"
            alt="Instagram/Maxwell"
            link="https://www.instagram.com/lanermaxwell/"
          />
          <SocialButton
            src="/assets/facebookIcon.svg"
            alt="Facebook/Maxwell"
            link="https://www.facebook.com/maxwell.laner"
          />
          <SocialButton
            src="/assets/youtubeIcon.svg"
            alt="Youtube/Maxwell"
            link="https://www.youtube.com/channel/UCbF-Tsi7Ap2qsNmqs560ioA"
          />
          <SocialButton
            src="/assets/githubIcon.svg"
            alt="Github/Maxwell"
            link="https://github.com/Maxwellaner"
          />
          <SocialButton
            src="/assets/mailIcon.svg"
            alt="Enviar e-mail para Maxwell"
            link="mailto:maxwellaner@gmail.com"
          />
        </div>
      </div>
      <img className="scroll-down" src="/assets/scrollDown.png" />
    </Container>
  );
}