import { React, useContext } from "react";
import styled from "styled-components";
import { getFontColor, getMainColor } from "../../const/colors";
import { ThemeContext } from "../../context/ThemeContext";

const Container = styled.div`
  padding: 20px 10vw;
  color: ${(props) => getFontColor(props.darkMode)};
  background-color: ${(props) => getMainColor(props.darkMode)};
`;

const MainContainer = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return <Container darkMode={darkMode}>{children}</Container>;
};

export default MainContainer;
