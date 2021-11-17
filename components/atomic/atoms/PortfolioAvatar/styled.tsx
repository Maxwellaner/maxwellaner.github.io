import styled from "styled-components";

export const PortfolioAvatarContainer = styled.div`
  position: relative;
  width: auto;

  .images {
    transform-style: preserve-3d;
  }
`;

interface ImageProps {
  src: string;
  alt: string;
  shadow?: boolean;
  width: string;
  absolute?: boolean;
  top?: number;
  left?: number;
  zIndex: number;
}

export const CustomImage = styled.img.attrs((props: ImageProps) => ({
  src: props.src,
  alt: props.alt
})) <ImageProps>`
  width: ${props => props.width};
  border-radius: 50%;

  position: ${props => {
    if (props.absolute) {
      return 'absolute';
    }
  }};
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  z-index: ${props => props.zIndex};

  box-shadow: ${props => {
    if (props.shadow) {
      return '0 0 1em black';
    }
  }};
`;