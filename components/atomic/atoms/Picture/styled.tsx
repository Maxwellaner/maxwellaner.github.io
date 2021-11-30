import styled from "styled-components";

export const PictureImage = styled.div`
  position: relative;
  width: 300px;
  height: 368px;
  border: 5px solid white;

  box-shadow: 10px 15px 12px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 450px) {
    height: 190px;
  }
`;

export const Photo = styled.img.attrs({
  src: '/assets/eu_sem_bg.png',
  alt: 'Maxwell Laner'
})`
  position: absolute;
  height: 400px;
  top: -12%;
  left: 10%;

  z-index: 10;

  @media (max-width: 450px) {
    height: 230px;
    top: -28%;
    left: 35%;
  }
`;

export const CodeIcon = styled.img.attrs({
  src: '/assets/codeIcon.svg',
  alt: 'Imagem de tag HTML'
})`
  position: absolute;
  width: 250px;

  left: -50px;
  top: -20px;

  @media (max-width: 450px) {
    width: 200px;
    left: -20px;
  }
`;