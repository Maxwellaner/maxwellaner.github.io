import { LeftContactBarContainer } from "./styled";

import buttons from '../../../json/social-buttons.json';
import { SocialButton } from "../../atoms/SocialButton";

export default function LeftContactBar() {
  return (
    <LeftContactBarContainer>
      <ul>
        {buttons.map(button => (
          <li key={button.src}>
            <SocialButton
              src={button.src}
              alt={button.alt}
              link={button.link}
            />
          </li>
        ))}
      </ul>
    </LeftContactBarContainer>
  );
}