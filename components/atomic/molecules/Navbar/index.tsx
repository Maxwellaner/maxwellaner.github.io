import { NavList } from '../NavList';
import { NavbarContainer } from './styled';
import Link from 'next/link';

export function Navbar() {
  return (
    <NavbarContainer>
      <div className="container">
        <h3>Maxwell Laner</h3>
        <NavList />
        <div className="technologies">
          <Link href="https://pt-br.reactjs.org/" >
            <a target="_blank" rel="noreferrer">
              <img src="/assets/reactIcon.svg" alt="React" />
            </a>
          </Link>
          <Link href="https://nodejs.org/">
            <a target="_blank" rel="noreferrer">
              <img src="/assets/nodeIcon.svg" alt="Node.js" />
            </a>
          </Link>
          <Link href="https://graphql.org/" >
            <a target="_blank" rel="noreferrer">
              <img src="/assets/graphqlIcon.svg" alt="GraphQl" />
            </a>
          </Link>
        </div>
      </div>
    </NavbarContainer>
  );
}