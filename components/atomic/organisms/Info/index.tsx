import { Header } from '../../molecules/Header';
import { Navbar } from '../../molecules/Navbar';
import { Container } from './styled';

export function Info() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
      </Container>
    </>
  );
}