import styled from "styled-components";

export const CustomButton = styled.a`
  padding: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 10px;
  position: relative;

  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    filter: invert();
  } 
`;