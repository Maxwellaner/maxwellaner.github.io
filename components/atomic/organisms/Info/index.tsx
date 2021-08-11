import { Header } from '../../molecules/Header';
import { Navbar } from '../../molecules/Navbar';
import { NavList } from '../../molecules/NavList';
import { Container } from './styled';

export function Info() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Navbar />
    </>
  );
}