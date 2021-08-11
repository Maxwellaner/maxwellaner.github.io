import { NavList } from '../NavList';
import { NavbarContainer } from './styled';

export function Navbar() {
  return (
    <NavbarContainer>
      <div className="container">
        <h3>Maxwell Laner</h3>
        <NavList />
        <div className="technologies">
          <img src="/assets/reactIcon.svg" alt="React" />
          <img src="/assets/nodeIcon.svg" alt="Node.js" />
          <img src="/assets/graphqlIcon.svg" alt="GraphQl" />
        </div>
      </div>
    </NavbarContainer>
  );
}