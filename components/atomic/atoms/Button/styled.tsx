import styled from "styled-components";

export const CustomButton = styled.button`
  width: 150px;
  height: 50px;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 10px;

  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    filter: invert();
  } 
`;