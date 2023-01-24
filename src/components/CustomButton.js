import React, { useContext } from "react";
import styled from "styled-components";
import {
  getHoverColor,
  getMainAccent,
  mainAccent,
  mainAccentHover,
} from "../const/colors";
import { ThemeContext } from "../context/ThemeContext";

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => getMainAccent(props.darkMode)};
  color: ${(props) => props.fontColor || "white"};
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 7px 23px;
  margin: 10px 5px;
  border: 2px solid ${(props) => getMainAccent(props.darkMode)};
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const CustomButton = ({ children, onClick }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <StyledButton darkMode={darkMode} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
