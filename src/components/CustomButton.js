import React from "react";
import styled from "styled-components";
import { mainAccent, mainAccentHover } from "../const/colors";

const StyledButton = styled.button`
  background-color: ${(props) => props.buttonColor || mainAccent};
  color: ${(props) => props.fontColor || "white"};
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 7px 23px;
  margin: 10px 5px;
  border: 2px solid ${mainAccent};
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.buttonHover || mainAccentHover};
  }
`;

const CustomButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default CustomButton;
