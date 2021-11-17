import { ScrollDownContainer } from "./styled";

type ScrollDownProps = {
  isScrolling: boolean;
}

export default function ScrollDown({ isScrolling }: ScrollDownProps) {
  return (
    <ScrollDownContainer isScrolling={isScrolling}>
      <img src="/assets/arrow-down.svg" alt="Scroll Down" />
    </ScrollDownContainer>
  );
}