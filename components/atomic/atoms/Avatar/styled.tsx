import styled from 'styled-components';

export const Image = styled.img.attrs({
  src: '/assets/avatar.jpeg',
  alt: 'Maxwell Laner avatar'
})`
  width: 35%;
  min-width: 250px;
  border-radius: 50%;
  border: 5px solid white;
  margin-right: 5%;

  @media (max-width: 450px) {
    min-width: 220px;
  }
`;