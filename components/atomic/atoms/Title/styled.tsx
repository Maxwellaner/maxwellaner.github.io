import styled from "styled-components";

export const Text = styled.h1<{ fontSize: string }>`
  font-size: ${props => props.fontSize};
`;