import styled from "styled-components";

export const DescriptionText = styled.h2<{ fontSize?: string }>`
  font-weight: normal;
  font-size: ${props => props.fontSize};
`;