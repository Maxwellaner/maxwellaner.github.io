import { Container } from './styled';
import { Avatar } from "../../atoms/Avatar";
import { Title } from '../../atoms/Title';
import { Description } from '../../atoms/Description';
import { SocialButton } from '../../atoms/SocialButton';

import buttons from '../../../json/social-buttons.json';

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
          {buttons.map(button => (
            <SocialButton
              key={button.src}
              src={button.src}
              alt={button.alt}
              link={button.link}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
