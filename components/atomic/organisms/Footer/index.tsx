import { FooterContainer } from "./styled";
import buttons from '../../../json/social-buttons.json';
import { SocialButton } from "../../atoms/SocialButton";

export function Footer() {
  return (
    <FooterContainer id="footer">
      <div className="footer-content">
        <div className="footer-part about">
          <h3>Maxwell Laner</h3>
          <p className="footer-about">
            É um Desenvolvedor Full Stack com experiência na criação de websites, sistemas administrativos,
            aplicativos mobile, manutenção de sistemas. Garante qualidade em seu trabalho.
          </p>
        </div>
        <div className="footer-part">
          <h3>Contato</h3>
          <div className="footer-social-buttons">
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
        <div className="footer-part tech">
          <h3 className="technologies-title">Principais tecnologias</h3>
          <div className="technologies">
            <img src="/assets/javascript.svg" alt="JavaScript" />
            <img src="/assets/html.svg" alt="HTML" />
            <img src="/assets/css.svg" alt="CSS" />
            <img src="/assets/reactIcon.svg" alt="React" />
            <img src="/assets/nodeIcon.svg" alt="Node" />
            <img src="/assets/graphqlIcon.svg" alt="GraphQL" />
            <img src="/assets/vue.svg" alt="Vue" />
            <img src="/assets/flutter.svg" alt="Flutter" />
            <img src="/assets/dart.svg" alt="Dart" />
            <img src="/assets/docker.svg" alt="Docker" />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
